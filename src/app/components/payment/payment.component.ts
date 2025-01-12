import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FakecardService } from 'src/app/fake-card.service';
import { Car } from 'src/app/models/car';
import { Customer } from 'src/app/models/customer';
import { FakeCard } from 'src/app/models/fakeCard';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  rental: Rental;
  car: Car;
  amountOfPayment: number = 500;
  nameOnTheCard: string;
  cardNumber: string;
  cardCvv: string;
  expirationDate: string;
  fakeCard: FakeCard;
  cardExist: Boolean = false;

  constructor(
    private activateRoute: ActivatedRoute,
    private carService: CarService,
    private customerService: CustomerService,
    private router: Router,
    private toastrService: ToastrService,
    private rentalService: RentalService,
    private fakeCardService: FakecardService
  ) {}

  ngOnInit(): void {

    this.getCarDetail();
    
  
  }



  getCarDetail() {
    this.carService
      .getCarDetails(this.car.id)
      .subscribe((response) => {
        this.car = response.data[0];
        this.paymentCalculator();
      });
  }

  paymentCalculator() {
    if (this.rental.returnDate != null) {
      var date1 = new Date(this.rental.returnDate.toString());
      var date2 = new Date(this.rental.rentDate.toString());
      var difference = date1.getTime() - date2.getTime();

      
      var numberOfDays = Math.ceil(difference / (1000 * 3600 * 24));

      this.amountOfPayment = numberOfDays * this.car.dailyPrice;
    }
  }

  async rentACar() {
    let fakeCard: FakeCard = {
      nameOnTheCard: this.nameOnTheCard,
      cardNumber: this.cardNumber,
      expirationDate: this.expirationDate,
      cardCvv: this.cardCvv,
    };

    this.cardExist = await this.isCardExist(fakeCard);
    if (this.cardExist) {
      this.fakeCard = await this.getFakeCardByCardNumber(this.cardNumber);
       if (this.fakeCard.moneyInTheCard >= this.amountOfPayment) {
        this.fakeCard.moneyInTheCard =
          this.fakeCard.moneyInTheCard - this.amountOfPayment;
        this.updateCard(fakeCard);
        this.rentalService.addRental(this.rental);
        this.toastrService.success('Arabayı kiraladınız', 'Işlem başarılı');
       }else {
        this.toastrService.error(
          'Kartınızda yeterli para bulunmamaktadır',
          'Hata'
        );
      }
    } else {
      this.toastrService.error('Bankanız bilgilerinizi onaylamadı', 'Hata');
    }
  }

  async isCardExist(fakeCard: FakeCard) {
    return (await this.fakeCardService.isCardExist(fakeCard).toPromise())
      .success;
  }

  async getFakeCardByCardNumber(cardNumber: string) {
    return (await this.fakeCardService.getCardByNumber(cardNumber).toPromise())
      .data[0];
  }

  updateCard(fakeCard: FakeCard) {
    this.fakeCardService.updateCard(fakeCard);
  }

  
  
}
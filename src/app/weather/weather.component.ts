import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApixuService } from "../apixu.service";

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  public weatherSearchForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private apixuService: ApixuService) { this.weatherSearchForm = this.formBuilder.group({ location: [''] }); };
  ngOnInit(): void { };
  sendToAPIXU(formValues) {
    this.apixuService
      .getWeather(formValues.location)
      .subscribe(data => console.log(data));
  };
}




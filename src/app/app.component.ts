import { Component ,OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  implements OnInit  {
  data = []; 

  ngOnInit() { 

    this.data = [{
          module: "Purchase Order Details",
          moduleData: [
            {
              "buyers":"MaxRunner",
              "poNumber":"SIP12345",
              "poConfirmateDate":"04-06-2010",
              "orderNumber":12345678,
              "profitCenter":"AU12345678",
              "deliveryAddress":"MaxRunner",
              "RequestedDeliveryDate":"04-06-2020",
              "ConfirmedDeliveryDate":"04-06-2020",
              "AssumedDeliveryDate":"04-06-2020",
              "materialNumber":12345678,
              "materialDescription":"Copper",
              "quanity":12,
              "supplierName":"MaxRunner",
              "supplierNumber":123456789,
              "forwarderName":"DHL Express",
              "forwarderNumber":98464565,
              "trackingNumber":"DHL12345678"
            }
          ]
        },
        {
          module: "Current Transport Status",
          TransportData: [
            {
              "step":1,
              "description":"Warenannahme",
              "status":true
            },
            {
              "step":2,
              "description":"Warenannahme",
              "status":true
            },
            {
              "step":3,
              "description":"Warenannahme",
              "status":false
            }
          ]
        },
        {
          module: "Complete Transport Status",
          CompleteData: [
            {
              "step":1,
              "description":"Warenannahme",
              "status":true
            },
            {
              "step":2,
              "description":"Warenannahme",
              "status":true

            },
            {
              "step":3,
              "description":"Warenannahme",
              "status":false
            }

          ]
        }
      ];
  }

  get firstKeyData() {
    return Object.keys(this.data[0].moduleData[0]);
  }

  get secondKeySteps() {
    return this.data[1].TransportData;
  }

  get thirdKeySteps() {
    return this.data[2].CompleteData;
  }

  isActive(stepStatus, index, steps) {
    return stepStatus && ( index + 1 >= steps.length || !steps[index+1].status )
  }

  getStatusClass(step, index, steps) {
    return step.status ? ( this.isActive(true, index, steps) ? ' active' : ' complete') : ' disabled'
  }

}

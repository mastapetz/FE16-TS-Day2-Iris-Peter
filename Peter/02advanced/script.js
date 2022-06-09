"use strict";
var _a;
class vehicles {
    constructor(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType) {
        this.image = image;
        this.maker = maker;
        this.model = model;
        this.buildYear = buildYear;
        this.kilometers = kilometers;
        this.price = price;
        this.PS = PS;
        this.numberOfSeats = numberOfSeats;
        this.fuelType = fuelType;
    }
    carInfo() {
        return;
        `    <div class="card">
        <div class="card-header d-flex justify-content-between bg-transparent">
          <div>${this.model} by ${this.maker} </div>
        </div>
        <img src="${this.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <div class="card-title text-center h5">${this.model}</div><br>
          <hr>
          <div class="card-text">${this.kilometers}</div>
          <div class="card-text">numberOfSeats Type: ${this.numberOfSeats}  </div>
          <div class="card-text">Fuel Type: ${this.fuelType}  </div>
          <div class="card-text">PS: ${this.PS}  </div>

        </div>
        <div class="card-footer bg-transparent text-center">
        <div class="card-text">Price: ${this.price}  </div>
          
          </div>
    </div> `;
    }
}
let ente = new vehicles("#", "Citroën", "2CV", 1988, 99000, 7000, 40, 4, "normal");
class trucks extends vehicles {
    constructor(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType, bLicenceSuff, bodyType, maxLoadWeight, emptyWeight) {
        super(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType);
        this.bLicenceSuff = bLicenceSuff;
        this.bodyType = bodyType;
        this.maxLoadWeight = maxLoadWeight;
        this.emptyWeight = emptyWeight;
    }
    truckInfo() {
        return;
        `    <div class="card">
        <div class="card-header d-flex justify-content-between bg-transparent">
          <div>${this.model} by ${this.maker} </div>
        </div>
        <img src="${this.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <div class="card-title text-center h5">${this.model}<br> ${this.bodyType} </div><br>
          <hr>
          <div class="card-text">${this.kilometers}</div>
          <div class="card-text">B License enough: ${this.bLicenceSuff}<br>
          Empty Weight: ${this.emptyWeight}<br>
          Max Load Weight: ${this.maxLoadWeight} </div>
          <div class="card-text">numberOfSeats Type: ${this.numberOfSeats}  </div>
          <div class="card-text">Fuel Type: ${this.fuelType}  </div>
          <div class="card-text">PS: ${this.PS}  </div>

        </div>
        <div class="card-footer bg-transparent text-center">
        <div class="card-text">Price: ${this.price}  </div>
          
          </div>
    </div> `;
    }
}
let ram = new trucks("#", "Chrysler", "Dodge Ram", 2022, 0, 54000, 308, 6, "normal", true, "Pickup Quad-Cab", 8000, 34000);
class motorBikes extends vehicles {
    constructor(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType, ageLimit, canDriveWithB) {
        super(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType);
        this.ageLimit = ageLimit;
        this.canDriveWithB = canDriveWithB;
    }
    bikeInfo() {
        return;
        `    <div class="card">
        <div class="card-header d-flex justify-content-between bg-transparent">
          <div>${this.model} by ${this.maker} </div>
        </div>
        <img src="${this.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <div class="card-title text-center h5">${this.model}</div><br>
          <hr>
          <div class="card-text">${this.kilometers}</div>
          <div class="card-text">Can drive with B: ${this.canDriveWithB}  </div>
          <div class="card-text">Has age limit: ${this.ageLimit}  </div>

          <div class="card-text">Fuel Type: ${this.fuelType}  </div>
          <div class="card-text">PS: ${this.PS}  </div>

        </div>
        <div class="card-footer bg-transparent text-center">
        <div class="card-text">Price: ${this.price}  </div>
          
          </div>
    </div> `;
    }
}
let mofaMaxi = new motorBikes("#", "Steyr Daimler Puch", "N2", 1992, 20000, 10000, 1.2, 1, "normal", false, true)((_a = document.querySelector(("ouput-cars"))) === null || _a === void 0 ? void 0 : _a.innerHTML);

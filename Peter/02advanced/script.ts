class vehicles {
  image: string;
  maker: string;
  model: string;
  buildYear: number;
  kilometers: number;
  price: number;
  PS: number;
  numberOfSeats: number;
  fuelType: string;
  constructor(image: string, maker: string, model: string, buildYear: number, kilometers: number, price: number, PS: number, numberOfSeats: number, fuelType: string) {
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
    return    `    <div class="card">
        <div class="card-header d-flex justify-content-between bg-transparent">
          <div>${this.model} by ${this.maker} </div>
        </div>
        <img src="${this.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <div class="card-title text-center h5">${this.model}</div><br>
          <hr>
          <div class="card-text">${this.kilometers} km</div>
          <div class="card-text">numberOfSeats Type: ${this.numberOfSeats}  </div>
          <div class="card-text">Fuel Type: ${this.fuelType}  </div>
          <div class="card-text">PS: ${this.PS}  </div>

        </div>
        <p>
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePricecars"
                aria-expanded="false" aria-controls="collapsePricecars">Show Price
            </button>
        </p>
        <div class="collapse" id="collapsePricecars">
            <div class="card card-body">Price: ${this.price}</div>
        </div>
    </div> `;
  }
}
let ente = new vehicles("./02advanced/vehicles/2CV.jpg", "Citroën", "2CV", 1988, 99000, 7000, 40, 4, "normal");
class trucks extends vehicles {
  bLicenceSuff: boolean;
  bodyType: string;
  maxLoadWeight: number;
  emptyWeight: number;
  constructor(image: string, maker: string, model: string, buildYear: number, kilometers: number, price: number, PS: number, numberOfSeats: number, fuelType: string, bLicenceSuff: boolean, bodyType: string, maxLoadWeight: number, emptyWeight: number) {
    super(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType);
    this.bLicenceSuff = bLicenceSuff;
    this.bodyType = bodyType;
    this.maxLoadWeight = maxLoadWeight;
    this.emptyWeight = emptyWeight
  }
  truckInfo() {
    return  `    <div class=" card">
    <div class="card-header d-flex justify-content-between bg-transparent">
        ${this.model} by ${this.maker}
    </div>
    <img src="${this.image}" class="card-img-top img-fluid" alt="...">
    <div class="card-body">
        <div class="card-title text-center h5">${this.model}<br> ${this.bodyType}
        </div>
        <hr>
        <div class="card-text">
            ${this.kilometers} km <br>
            B License enough: ${this.bLicenceSuff}<br>
            Empty Weight: ${this.emptyWeight}<br>
            Max Load Weight: ${this.maxLoadWeight} <br>
            Seats: ${this.numberOfSeats}
            Fuel Type: ${this.fuelType} <br>
            PS: ${this.PS}
        </div>


        <p>
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceTrucks"
                aria-expanded="false" aria-controls="collapsePriceTrucks">Show Price
            </button>
        </p>
        <div class="collapse" id="collapsePriceTrucks">
            <div class="card card-body">Price: ${this.price}</div>
        </div>
    </div>
             `;
  }
}
// <div class="card-footer bg-transparent text-center"> (for line 77) </div> (for line 76)
let ram = new trucks("./02advanced/vehicles/RAM.JPG", "Chrysler", "Dodge Ram", 2022, 0, 54000, 308, 6, "normal", true, "Pickup Quad-Cab", 8000, 34000);
class motorBikes extends vehicles {
  ageLimit: boolean;
  canDriveWithB: boolean;
  constructor(image: string, maker: string, model: string, buildYear: number, kilometers: number, price: number, PS: number, numberOfSeats: number, fuelType: string, ageLimit: boolean, canDriveWithB: boolean) {
    super(image, maker, model, buildYear, kilometers, price, PS, numberOfSeats, fuelType)
    this.ageLimit = ageLimit;
    this.canDriveWithB = canDriveWithB;
  }
  bikeInfo() {
    return `    <div class="card">
        <div class="card-header d-flex justify-content-between bg-transparent">
          <div>${this.model} by ${this.maker} </div>
        </div>
        <img src="${this.image}" class="card-img-top img-fluid" alt="...">
        <div class="card-body">
          <div class="card-title text-center h5">${this.model}</div><br>
          <hr>
          <div class="card-text">${this.kilometers} km </div>
          <div class="card-text">Can drive with B: ${this.canDriveWithB}  </div>
          <div class="card-text">Has age limit: ${this.ageLimit}  </div>

          <div class="card-text">Fuel Type: ${this.fuelType}  </div>
          <div class="card-text">PS: ${this.PS}  </div>

        </div>
        <p>
            <button class="btn btn-success" type="button" data-bs-toggle="collapse" data-bs-target="#collapsePriceBike"
                aria-expanded="false" aria-controls="collapsePriceBike">Show Price
            </button>
        </p>
        <div class="collapse" id="collapsePriceBike">
            <div class="card card-body">Price: ${this.price}</div>
        </div>
          
          </div>
    </div> `;
  }
  
}

let mofaMaxi = new motorBikes("./02advanced/vehicles/n2.jpg", "Steyr Daimler Puch", "N2", 1992, 20000, 10000, 1.2, 1, "normal", false, true);
// output cards
var outputEnte = (document.getElementById("ouput-cars") as HTMLElement);
outputEnte.innerHTML = ente.carInfo();
// output trucks
var outputRam =(document.getElementById("ouput-trucks") as HTMLElement);
outputRam.innerHTML += ram.truckInfo();
// output bikes
var outputPuch = document.getElementById("ouput-bikes") as HTMLElement;
outputPuch.innerHTML  += mofaMaxi.bikeInfo();
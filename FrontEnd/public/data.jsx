export const CARS = [
  {
    id: "aurora-gt",
    make: "Aurora",
    model: "GT",
    year: 2024,
    price: 284000,
    mileage: 12,
    transmission: "Automatic",
    fuel: "Hybrid",
    horsepower: 670,
    image:
      "https://res.cloudinary.com/ftyrh7im/image/upload/v1787152556/E36_325TDS_GOLDEN-26.jpg",
    featured: true,
    available: true,
  },
  {
    id: "aurora-s",
    make: "Aurora",
    model: "S Coupe",
    year: 2023,
    price: 198000,
    mileage: 4800,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 520,
    image:
      "https://images.pexels.com/photos/35082884/pexels-photo-35082884.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "ferrari-spider",
    make: "Ferrari",
    model: "Spider 488",
    year: 2022,
    price: 245000,
    mileage: 8200,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 661,
    image:
      "https://images.pexels.com/photos/18479749/pexels-photo-18479749.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "ferrari-roma",
    make: "Ferrari",
    model: "Roma",
    year: 2023,
    price: 267000,
    mileage: 1500,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 612,
    image:
      "https://images.pexels.com/photos/38136077/pexels-photo-38136077.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "bmw-m",
    make: "BMW",
    model: "M4 Competition",
    year: 2024,
    price: 79000,
    mileage: 320,
    transmission: "Manual",
    fuel: "Petrol",
    horsepower: 503,
    image:
      'https://res.cloudinary.com/ftyrh7im/image/upload/v1787151874/E36_325TDS_GOLDEN-22.jpg',
    available: false,
  },
  {
    id: "bmw-convertible",
    make: "BMW",
    model: "M8 Convertible",
    year: 2023,
    price: 130000,
    mileage: 5600,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 617,
    image:
      "https://images.pexels.com/photos/16188347/pexels-photo-16188347.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "porsche-911",
    make: "Porsche",
    model: "911 Carrera",
    year: 2024,
    price: 128000,
    mileage: 240,
    transmission: "Manual",
    fuel: "Petrol",
    horsepower: 379,
    image:
      "https://images.pexels.com/photos/17017141/pexels-photo-17017141.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "porsche-cabriolet",
    make: "Porsche",
    model: "911 Cabriolet",
    year: 2022,
    price: 112000,
    mileage: 9800,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 379,
    image:
      "https://images.pexels.com/photos/38404151/pexels-photo-38404151.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "mercedes-amg",
    make: "Mercedes",
    model: "AMG GT",
    year: 2023,
    price: 135000,
    mileage: 4200,
    transmission: "Automatic",
    fuel: "Hybrid",
    horsepower: 577,
    image:
      "https://images.pexels.com/photos/19240614/pexels-photo-19240614.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "mercedes-coupe",
    make: "Mercedes",
    model: "SL Roadster",
    year: 2024,
    price: 142000,
    mileage: 180,
    transmission: "Automatic",
    fuel: "Hybrid",
    horsepower: 429,
    image:
      "https://images.pexels.com/photos/20695256/pexels-photo-20695256.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "aston-vantage",
    make: "Aston Martin",
    model: "Vantage",
    year: 2023,
    price: 189000,
    mileage: 3100,
    transmission: "Manual",
    fuel: "Petrol",
    horsepower: 503,
    image:
      "https://images.pexels.com/photos/439405/pexels-photo-439405.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
  {
    id: "aston-db12",
    make: "Aston Martin",
    model: "DB12",
    year: 2024,
    price: 248000,
    mileage: 450,
    transmission: "Automatic",
    fuel: "Petrol",
    horsepower: 671,
    image:
      "https://images.pexels.com/photos/4274785/pexels-photo-4274785.jpeg?auto=compress&cs=tinysrgb&w=900",
    available: true,
  },
];

export const MAKES = [
  "All",
  ...Array.from(new Set(CARS.map((car) => car.make))),
];

export const SORT_OPTIONS = [
  {
    value: "featured",
    label: "Featured",
  },
  {
    value: "year-desc",
    label: "Newest to Oldest",
  },
  {
    value: "year-asc",
    label: "Oldest to Newest",
  },
  {
    value: "mileage-asc",
    label: "Lowest mileage",
  },
  {
    value: "horsepower-desc",
    label: "Most powerful",
  },
];

export function formatPrice(n) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function formatMileage(n) {
  return new Intl.NumberFormat("en-US").format(n);
}
export const fetchCars = () => (
  $.ajax({
    method: 'get',
    url: '/api/cars',
  })
);

export const fetchCar = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/cars/${id}`,
  })
);

export const createCar = (car) => (
  $.ajax({
    method: 'post',
    url: '/api/cars',
    data: {car}
  })
);

export const deleteCar = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/cars/${id}`
  })
);

export const editCar = (car) => (
  $.ajax({
    method: 'delete',
    url: `/api/cars/${car.id}`,
    data: {car}
  })
);
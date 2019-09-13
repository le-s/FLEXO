export const fetchCars = (filters) => (
  $.ajax({
    method: 'get',
    url: '/api/cars',
    data: filters,
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
    data: car,
    contentType: false,
    processData: false
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
    method: 'patch',
    url: `/api/cars/${car.id}`,
    data: {car}
  })
);
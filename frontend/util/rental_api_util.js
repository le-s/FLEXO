export const createRental = rental => (
  $.ajax({
    method: 'post',
    url: '/api/rentals',
    data: {rental},
  })
)

export const fetchRental = (id) => (
  $.ajax({
    method: 'get',
    url: `/api/rentals/${id}`
  })
)

export const deleteRental = (id) => (
  $.ajax({
    method: 'delete',
    url: `/api/rentals/${id}`
  })
);

export const editRental = (rental) => (
  $.ajax({
    method: 'patch',
    url: `/api/rentals/${rental.id}`,
    data: { rental }
  })
);
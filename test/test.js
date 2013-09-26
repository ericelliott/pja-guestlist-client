$(function () {

  var $list = $('#guestlist-view'),
    checkedinClass = 'icon-check',
    guestSelector = '.guest';

  test('Guestlist', function () {
    ok($list.children().length,
      'List element should have guests.');
  });

  test('Guests', function () {

    // Grab the first guest from the list
    var $guest = $($list.find(guestSelector)[0]),
      guestExists = !!$guest[0];

    // Simulate click
    $guest.click();

    ok($guest.hasClass(checkedinClass),
        'Should be checked on click');

    $guest.click();

    // To avoid a false positive, make sure
    // you have a guest element to test against.
    ok(guestExists && !$guest.hasClass(checkedinClass),
        'Should toggle off when clicked again');
  });

});


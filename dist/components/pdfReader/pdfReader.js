// https://mozilla.github.io/pdf.js/



$(function () {
  var pdfJS = 'https://cdnjs.com/libraries/pdf.js',
    $pdfReader = $('.pdfReader'),
    pdf = $pdfReader.attr('data-pdf');

  if ($pdfReader.length) {
    console.log('pdf true');
  }

});

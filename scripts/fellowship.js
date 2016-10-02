console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
  $('body').append(section);//appending section to the body
  $('section').prop('id', 'middle-earth');//putting the id of middle earth on the section
  //$('#middle-earth').append('<article></article>');//appending article within middle earth
  $.each(lands, function (i, thelands) {
    $('#middle-earth').append('<article>' + '<h1>' + thelands + '</h1>' + '</article>');
    }
  )};


makeMiddleEarth();

function makeHobbits(){
  for (var i = 0; i < hobbits.length; i++) {
      $('#middle-earth > article:nth-child(1)').append('<li>' + (hobbits[i]) + '</li>');
  }
};

//makeHobbits();

function keepItSecretKeepItSafe(){
        $('#middle-earth > article:nth-child(1) > li:nth-child(2)').append('<div></div>');
        $('div').prop('id','the-ring');
        $('div').addClass('magic-imbued-jewelry');
}

function makeBuddies() {
    $('#middle-earth > article:nth-child(2)').append('<aside></aside>');
    for (var i = 0; i < buddies.length; i++) {
        $('aside').append('<li>' + (buddies[i]) + '</li>');
    }
};
//makeBuddies();

function beautifulStranger(){
    $('#middle-earth > article:nth-child(2) > aside > li:nth-child(4)').text('Aragorn');
}
beautifulStranger();

function leaveTheShire(){
    for (var i = 0; i < hobbits.length; i++) {
        $('#middle-earth > article:nth-child(2)').append('<li>' + (hobbits[i]) + '</li>');
    }
};


function forgeTheFellowship() {
    $('#middle-earth > article:nth-child(2)').append('<div></div>');
    $('div').prop('id','the-fellowship');

    alert('the hobbits and buddies have joined the party');
    //this is probably wrong...should have used a .each...but it didnt work
    //    $.each(function (i, buddies, hobbits) {
    //$('#middle-earth > article:nth-child(2)').append('<li>' + hobbits + buddies+ '</li>');
    //};
    //}

    //so I used this...
    for(var i = 0; i < hobbits.length; i++){
        $('#middle-earth > article:nth-child(2)').append('<li>' + (hobbits[i]) + '</li>');
    }
    for(var i = 0; i < buddies.length; i++){
        $('#middle-earth > article:nth-child(2)').append('<li>' + (buddies[i]) + '</li>');
    }
};
forgeTheFellowship();


//figure out why this is the not working anymore
function theBalrog(){
    $('#the-fellowship > li:nth-child(5)').text('Gandalf the White');
    $('#the-fellowship > li:nth-child(5)').css('background-color','white');
    $('#the-fellowship > li:nth-child(5)').css('border', 'solid 10px grey');
}
theBalrog();


function hornOfGondor() {
  alert("the horn of gondor has blow and Boromir's been killed by the Uruk-kai! Oh no!");
    $('#the-fellowship > li:nth-child(9)').remove();
}
hornOfGondor();


//This is not working at all...come back to these...
// it's giving me an error by the semicolon on line 119 when I uncomment the itsDamgerousToGoAlone function
//I was trying to troubleshoot one line at a time


//  Part 10
// var itsDangerousToGoAlone = function (){
// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
// add a div with an id of `'mount-doom'` to `Mordor`

// function itsDangerousToGoAlone() {

    // var moveFrodo = $('#middle-earth > article:nth-child(1) > li:nth-child(3)');
    // moveFrodo.next().insertBefore($('#middle-earth > article:nth-child(2) > li:nth-child(3)'));
    // var moveSam = $('#middle-earth > article:nth-child(2) > li:nth-child(3)');
    // moveSam.next().insertAfter($('#middle-earth > article:nth-child(3) > h1'));
    //$('#middle-earth > article:nth-child(3) > h1').append('<div></div>');
    //$('div').prop('id','mount-doom');

// itsDangerousToGoAlone();

 // Part 11
 // var weWantsIt = function () {
 // Create a div with an id of `'gollum'` and add it to Mordor
 // Remove `the ring` from `Frodo` and give it to `Gollum`
 // Move Gollum into Mount Doom


// function weWantsIt() {
//     $('#middle-earth > article:nth-child(3) > h1').append('<div></div>');
//     $('div').prop('id','gollum');
//     $('div').addClass('magic-imbued-jewelry');
//     //move gollum to mount doom
// };
//
// weWantsIt();

//-----------------------------------------
//  Part 12
// var thereAndBackAgain = function () {
// remove `Gollum` and `the Ring` from the document
// Move all the `hobbits` back to `the shire`


//function thereAndBackAgain(){
// remove `Gollum` and `the Ring` from the document

// Move all the `hobbits` back to `the shire`
//     for (var i = 0; i < hobbits.length; i++) {
//         $('#middle-earth > article:nth-child(1)').append('<li>' + (hobbits[i]) + '</li>');
//      }
//  };
//
// thereAndBackAgain();

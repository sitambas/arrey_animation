// This array sets up the animation steps
// time: number of milliseconds before adding the class
// step: the name of the class to add to the element
// selector: the name of the element that you're applying the class to

var animations = [
    {
        // Activate the second step, circle #2
        time:2000,
        step:"step-2",
        selector:'.circle'
    },
    {
        // Activate the third step
        time:2000,
        step:"step-3",
        selector:'.circle'
    },
    {
        // Activate the fourth step
        time:2000,
        step:"step-4",
        selector:'.circle'
    },
    {
        // Activate the fifth step
        time:2000,
        step:"step-5",
        selector:'.circle'
    }
];

// Grab data from the animation array
// and create sets of class additions to elements after defined setTimeouts

function runAnimation(i, timeline){
    setTimeout(function(){
        $(animations[i].selector).addClass(animations[i].step);
    }, timeline);
}

// Go through the array, and execute each step one at a time in order
// by doing runAnimation() on each array element

function animationTimeline(){
    var timeline = 0;

    for(var i=0; i<animations.length; i++){
        // for each step in the animation array
        // update timeline to be value of animations[i].time PLUS previous timeline value
        timeline = parseInt(animations[i].time, 10) + parseInt(timeline, 10);
        runAnimation(i, timeline);
    }
}

// Run the animation
jQury(document).ready(function(){
    jQuery('#run').click(function(){
        animationTimeline();
    });

    // Restart the animation
    jQuery('#restart').click(function(){
        $('.circle').removeClass("step-2 step-3 step-4 step-5");
        animationTimeline();
    });
});
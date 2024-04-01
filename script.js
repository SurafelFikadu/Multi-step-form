const stepOne = document.getElementById("step-1");
const stepTwo = document.getElementById("step-2");
const stepThree = document.getElementById("step-3");
const stepFour = document.getElementById("step-4");
const stepFive = document.getElementById("step-5");

const numOne = document.getElementById("num-1");
const numTwo = document.getElementById("num-2");
const numThree = document.getElementById("num-3");
const numFour = document.getElementById("num-4");

const nextButton = document.getElementById("next-step");
const backButton = document.getElementById("go-back");
const buttons = document.getElementById("buttons");

// name, email & phone on step-1
const nameStep1 = document.getElementById("name-1");
const emailStep1 = document.getElementById("email-1");
const phoneStep1 = document.getElementById("phone");

const emailRequired = document.getElementById("email-required");

const emailValid = new RegExp('^.+@+.+\.+[a-z]+$');

//function that required for the next function
const nextButtonFunction = () => {
    // if function for first step 
    if (stepOne.style.display != "none") {
        if(nameStep1.value && phoneStep1.value) {
            if(emailValid.test(emailStep1.value)) {
                stepOne.style.display = "none";
                stepTwo.style.display = "block";
                backButton.style.visibility = "visible";
                numOne.style.color = "white";
                numOne.style.background = "none";
                numTwo.style.color = "hsl(213, 96%, 18%)";
                numTwo.style.background = "hsl(0, 0%, 87%)";
            }
            else if (emailStep1.value == "") {
                emailRequired.textContent = "This field is required";
            }
            else {
                emailRequired.textContent = "Please insert the correct email";
            }
        }
    }

    // if function for the second step
    else if(stepTwo.style.display !== "none") {
        stepTwo.style.display = "none";
        stepThree.style.display = "block";
        numTwo.style.color = "white";
        numTwo.style.background = "none";
        numThree.style.color = "hsl(213, 96%, 18%)";
        numThree.style.background = "hsl(0, 0%, 87%)";
    }
    //if function for the third step
    else if(stepThree.style.display != "none") {
        stepThree.style.display = "none";
        stepFour.style.display = "block";
        numThree.style.color = "white";
        numThree.style.background = "none";
        numFour.style.color = "hsl(213, 96%, 18%)";
        numFour.style.background = "hsl(0, 0%, 87%)";
        nextButton.textContent = "Confirm"
    }

    //if function for the fourth step
    else {
        stepFour.style.display = "none";
        stepFive.style.display = "block";
        buttons.style.display = "none"
    }
}

const backButtonFunction = () => {
    if(stepTwo.style.display != "none") {
        stepTwo.style.display = "none";
        stepOne.style.display = "block";
        backButton.style.visibility = "hidden";

        numTwo.style.color = "white";
        numTwo.style.background = "none";
        numOne.style.color = "hsl(213, 96%, 18%)";
        numOne.style.background = "hsl(0, 0%, 87%)";

        emailRequired.textContent = "";
    } else if(stepThree.style.display !== "none") {
        stepThree.style.display = "none";
        stepTwo.style.display = "block";

        numThree.style.color = "white";
        numThree.style.background = "none";
        numTwo.style.color = "hsl(213, 96%, 18%)";
        numTwo.style.background = "hsl(0, 0%, 87%)";
    } else if(stepFour.style.display !== "none") {
        stepFour.style.display = "none";
        stepThree.style.display = "block";
        nextButton.textContent = "Next Step";

        numFour.style.color = "white";
        numFour.style.background = "none";
        numThree.style.color = "hsl(213, 96%, 18%)";
        numThree.style.background = "hsl(0, 0%, 87%)";
    }
}

nextButton.addEventListener("click", nextButtonFunction);
backButton.addEventListener("click", backButtonFunction);

// shift to month or to year locate on step-2
const monthly = document.getElementById("to-month");
const yearly = document.getElementById("to-year");
const buttonShift = document.getElementById("button-shift");

//step-2 properties
const shiftLeft = document.getElementById("shift-left");
const shiftRight = document.getElementById("shift-right");
const arcYear = document.getElementById("arc-year");
const arcMonth = document.getElementById("arc-month");
const advYear = document.getElementById("adv-year");
const advMonth = document.getElementById("adv-month");
const proYear = document.getElementById("pro-year");
const proMonth = document.getElementById("pro-month");

// step-3 properties
const serviceMonth = document.getElementById("service-month");
const serviceYear = document.getElementById("service-year");
const storageMonth = document.getElementById("storage-month");
const storageYear = document.getElementById("storage-year");
const profileMonth = document.getElementById("profile-month");
const profileYear = document.getElementById("profile-year");

// step-4 properties
const changeMonth = document.getElementById("change-month-step-4");
const changeYear = document.getElementById("change-year-step-4");
const onlineMonth = document.getElementById("online-month-step-4");
const onlineYear = document.getElementById("online-year-step-4");
const largerMonth = document.getElementById("larger-month-step-4");
const largerYear = document.getElementById("larger-year-step-4");
const totalMonth = document.getElementById("total-month-step-4");
const totalYear = document.getElementById("total-year-step-4");
const monthTotal = document.getElementById("month-total");
const yearTotal = document.getElementById("year-total");


const shiftFunction = () => {
    if(shiftLeft.style.visibility !== "hidden") {
        shiftLeft.style.visibility = "hidden";
        shiftRight.style.visibility = "visible";
        monthly.style.color = "hsl(231, 11%, 63%)";
        yearly.style.color = "hsl(213, 96%, 18%)";
        arcYear.style.display = "block";
        advYear.style.display = "block";
        proYear.style.display = "block";
        arcMonth.style.display = "none";
        advMonth.style.display = "none";
        proMonth.style.display = "none";
        
        serviceYear.style.display = "block";
        storageYear.style.display = "block";
        profileYear.style.display = "block";
        serviceMonth.style.display = "none";
        storageMonth.style.display = "none";
        profileMonth.style.display = "none";

        changeYear.style.display = "block";
        onlineYear.style.display = "block";
        largerYear.style.display = "block";
        totalYear.style.display = "block";
        yearTotal.style.display = "block";
        changeMonth.style.display = "none";
        onlineMonth.style.display = "none";
        largerMonth.style.display = "none";
        totalMonth.style.display = "none";
        monthTotal.style.display = "none";


    } else {
        shiftLeft.style.visibility = "visible";
        shiftRight.style.visibility = "hidden";
        yearly.style.color = "hsl(231, 11%, 63%)";
        monthly.style.color = "hsl(213, 96%, 18%)";
        arcYear.style.display = "none";
        advYear.style.display = "none";
        proYear.style.display = "none";
        arcMonth.style.display = "block";
        advMonth.style.display = "block";
        proMonth.style.display = "block";
        
        serviceYear.style.display = "none";
        storageYear.style.display = "none";
        profileYear.style.display = "none";
        serviceMonth.style.display = "block";
        storageMonth.style.display = "block";
        profileMonth.style.display = "block";

        changeYear.style.display = "none";
        onlineYear.style.display = "none";
        largerYear.style.display = "none";
        totalYear.style.display = "none";
        yearTotal.style.display = "none";
        changeMonth.style.display = "block";
        onlineMonth.style.display = "block";
        largerMonth.style.display = "block";
        totalMonth.style.display = "block";
        monthTotal.style.display = "block";
    }
}

buttonShift.addEventListener("click", shiftFunction);
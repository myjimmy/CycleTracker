// create constants for the form and the form controls
const newPeriodFormEl = document.getElementsByTagName("form")[0];
const startDateInputEl = document.getElementById("start-date");
const endDateInputEl = document.getElementById("end-date");

// Listen to form submissions.
newPeriodFormEl.addEventListener("submit", (event) => {
    // Prevent the form from submitting to the server
    // since everything is client-side.
    event.preventDefault();

    // Get the start and end dates from the form.
    const startDate = startDateInputEl.value;
    const endDate = endDateInputEl.value;

    // Check if the dates are invalid
    if (checkDatesInvalid(startDate, endDate)) {
        // If the dates are invalid, exit.
        return;
    }

    // Store the new period in our client-side storage.
    storeNewPeriod(startDate, endDate);

    // Refresh the UI.
    renderPastPeriods();

    // Reset the form.
    newPeriodFormEl.reset();
});

// Check if the dates are invalid
function checkDatesInvalid(startDate, endDate) {
    // Check that end date is after start date and neither is null.
    if (!startDate || !endDate || startDate > endDate) {
        // To make the validation robust we could:
        // 1. add error messaging based on error type
        // 2. Alert assistive technology users about the error
        // 3. move focus to the error location
        // instead, for now, we clear the dates if either
        // or both are invalid
        newPeriodFormEl.reset();
        // as dates are invalid, we return true
        return true;
    }
    // else
    return false;
}

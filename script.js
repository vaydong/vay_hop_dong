const startButton = document.getElementById("startButton");
const steps = document.querySelectorAll(".step");
const statusMessage = document.getElementById("statusMessage");

startButton.addEventListener("click", () => {
    let currentStep = 0;

    // Reset all steps
    steps.forEach(step => step.classList.remove("active"));
    statusMessage.textContent = "";

    // Handle each step after a delay
    const interval = setInterval(() => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove("active");
        }
        if (currentStep < steps.length) {
            steps[currentStep].classList.add("active");

            // Update status message
            if (currentStep === 0) {
                statusMessage.textContent = "Đơn hàng đang được xử lý...";
            } else if (currentStep === 1) {
                statusMessage.textContent = "Đơn hàng đang được duyệt...";
            } else if (currentStep === 2) {
                statusMessage.textContent = "Xác nhận trễ, đơn hàng thất bại. Tiền sẽ không được hoàn về.";
            }

            currentStep++;
        } else {
            clearInterval(interval);
        }
    }, 2000);
});

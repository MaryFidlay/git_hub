
let role = "Enrolled Member";
let message;

switch (role) {
    case "Employee":
        message = "They are authorized to have access to Dietary Services";
        break;
    case "Enrolled Member":
        message = "They are authorized to have access to Dietary Services and one-on-one interaction with a dietician.";
        break;
    case "Subscriber":
        message = "They are authorized to have partial access to facilitate Dietary Services only.";
        break;
    case "Non-Subscriber":
        message = " They need to enroll or at least subscribe first to avail this facility.";
        break;

    default:
        message = "Unknown";
}

// console.log("message:", message);

console.log("Access Message:", message);



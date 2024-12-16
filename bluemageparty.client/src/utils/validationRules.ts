// src/utils/validationRules.ts

// Email validation rule
export const emailRule = (value: string): string | boolean => {
    if (!value) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value) || "Please enter a valid email address";
};

// Password validation rule
export const passwordRule = (value: string): string | boolean => {
    if (!value) return "Password is required";
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    return (
        passwordRegex.test(value) ||
        "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, a number, and a special character"
    );
};

// Confirm Password validation rule
export const confirmPasswordRule = (passwordRef: () => string) => {
    return (value: string): string | boolean => {
        if (!value) return "Please confirm your password";
        return value === passwordRef() || "Passwords do not match";
    };
};
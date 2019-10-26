package com.jax;

import java.util.Scanner;

public class SalaryInputBuilder extends SalaryInput {
    private Scanner scanner;

    public SalaryInputBuilder() {
        scanner = new Scanner(System.in);
    }

    private String read(String message) {
        System.out.print(message);
        return scanner.nextLine();
    }

    public SalaryInputBuilder collectStartingSalary() {
        String input = read("The starting salary: ");
        try {
            double result = Double.parseDouble(input);
            if (result >= 0) {
                this.setStartingSalary(result);
                return this;
            } else {
                System.err.println("Starting salary cannot be less than 1.");
                return this.collectStartingSalary();
            }
        } catch (Exception ex) {
            System.err.println("Input must be a double value.");
            return this.collectStartingSalary();
        }
    }

    public SalaryInputBuilder collectIncrementInPercent() {
        String input = read("Increment in percent: ");
        try {
            double result = Double.parseDouble(input);

            if (result >= 0) {
                this.setIncrementPercent(result);
                return this;
            } else {
                System.err.println("Increment in percent cannot be less than 0.");
                return this.collectStartingSalary();
            }

        } catch (Exception ex) {
            System.err.println("Input must be a number.");
            return this.collectIncrementInPercent();
        }

    }

    public SalaryInputBuilder collectIncrementFrequency() {
        String input = read("The number of increments (4:quarterly, 2:half-yearly, 1:annually): ");
        try {
            int result = Integer.parseInt(input);

            if (result >= 1) {
                this.setNumberOfIncrements(result);
                return this;
            } else {
                System.err.println("The number of increments cannot be less than 1.");
                return this.collectStartingSalary();
            }

        } catch (Exception ex) {
            System.err.println("Input must be a number.");
            return this.collectIncrementInPercent();
        }
    }

    public SalaryInputBuilder collectDeductionInPercent() {
        String input = read("Deduction in percent: ");
        try {
            double result = Double.parseDouble(input);

            if (result >= 0) {
                this.setDeductionPercent(result);
                return this;
            } else {
                System.err.println("Deduction in percent cannot be less than 0.");
                return this.collectStartingSalary();
            }

        } catch (Exception ex) {
            System.err.println("Input must be a number.");
            return this.collectDeductionInPercent();
        }

    }

    public SalaryInputBuilder collectDeductionFrequency() {
        String input = read("The number of deductions (4:quarterly, 2:half-yearly, 1:annually): ");
        try {
            int result = Integer.parseInt(input);

            if (result >= 1) {
                this.setNumberOfDeductions(result);
                return this;
            } else {
                System.err.println("The number of deductions cannot be less than 1.");
                return this.collectStartingSalary();
            }

        } catch (Exception ex) {
            System.err.println("Input must be a number.");
            return this.collectDeductionInPercent();
        }
    }


    public SalaryInputBuilder collectPredictionYears() {
        String input = read("Prediction for years: ");
        try {
            int result = Integer.valueOf(input);
            if (result > 0) {
                this.setYears(result);
                return this;

            } else {
                System.err.println("Prediction years must be greater than 0.");
                return this.collectPredictionYears();
            }

        } catch (Exception e) {
            System.err.println("Input must be an integer.");
            return this.collectPredictionYears();
        }
    }

    public SalaryInput build() {
        return (SalaryInput) this;
    }
}
package com.jax;

public class SalaryIncomePredictor {
    public SalaryIncomePredictor() {
        System.out.println();
        System.out.println("Salary Income Predictor");
        System.out.println("=================================================");
        System.out.println();
    }

    public SalaryInput getInputFromTerminal() {
        return new SalaryInputBuilder()
                .collectStartingSalary()
                .collectIncrementInPercent()
                .collectIncrementFrequency()
                .collectDeductionInPercent()
                .collectDeductionFrequency()
                .collectPredictionYears()
                .build();
    }

    public void generateReport (SalaryInput input) {

        double incrementAmount = input.getStartingSalary() * Math.pow(input.getIncrementPercent() / 100 + 1, input.getIncrementPercent() * input.getYears()) - input.getStartingSalary() * input.getYears();
        double deductionAmount = input.getStartingSalary() * input.getYears() - input.getStartingSalary() * Math.pow(1 - input.getIncrementPercent() / 100, input.getIncrementPercent() * input.getYears());
        System.out.println("Increment Report");
        System.out.println("====================================");

        System.out.print("Year");
        System.out.print("\t");

        System.out.print("Starting Salary");
        System.out.print("\t");

        System.out.print("Number of Increments");
        System.out.print("\t");

        System.out.print("Increment%");
        System.out.print("\t");

        System.out.print("Increment Amount");
        System.out.print("\n");


        System.out.print(input.getYears());
        System.out.print("\t");

        System.out.print(input.getStartingSalary());
        System.out.print("\t");

        System.out.print(input.getNumberOfIncrements());
        System.out.print("\t");

        System.out.print(input.getIncrementPercent());
        System.out.print("\t");

        System.out.print(String.format("%.2f",incrementAmount));
        System.out.print("\n");


        System.out.println("Deduction Report");
        System.out.println("====================================");

        System.out.print("Year");
        System.out.print("\t");

        System.out.print("Starting Salary");
        System.out.print("\t");

        System.out.print("Number of Increments");
        System.out.print("\t");

        System.out.print("Increment%");
        System.out.print("\t");

        System.out.print("Increment Amount");
        System.out.print("\n");


        System.out.print(input.getYears());
        System.out.print("\t");

        System.out.print(input.getStartingSalary());
        System.out.print("\t");

        System.out.print(input.getNumberOfDeductions());
        System.out.print("\t");

        System.out.print(input.getDeductionPercent());
        System.out.print("\t");

        System.out.print(String.format("%.2f",deductionAmount));
        System.out.print("\n");


        System.out.println("Prediction Report");
        System.out.println("====================================");

        System.out.print("Year");
        System.out.print("\t");

        System.out.print("Starting Salary");
        System.out.print("\t");

        System.out.print("Increment Amount");
        System.out.print("\t");

        System.out.print("Deduction Amount");
        System.out.print("\t");

        System.out.print("Salary Growth");
        System.out.print("\n");


        System.out.print(input.getYears());
        System.out.print("\t");

        System.out.print(input.getStartingSalary());
        System.out.print("\t");

        System.out.print(String.format("%.2f", incrementAmount));
        System.out.print("\t");

        System.out.print(String.format("%.2f", deductionAmount));
        System.out.print("\t");

        System.out.print(String.format("%.2f", incrementAmount - deductionAmount + input.getStartingSalary() * input.getYears()));
        System.out.print("\n");
    }

    public static void main(String[] args) {
        SalaryIncomePredictor salaryIncomePredictor = new SalaryIncomePredictor();
        SalaryInput input = salaryIncomePredictor.getInputFromTerminal();
        salaryIncomePredictor.generateReport(input);
    }
}

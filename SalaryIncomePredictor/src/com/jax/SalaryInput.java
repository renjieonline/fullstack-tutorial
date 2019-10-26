package com.jax;

import java.math.BigDecimal;

public class SalaryInput {
    private double startingSalary;
    private double incrementPercent;
    private int numberOfIncrements;
    private double deductionPercent;
    private int numberOfDeductions;
    private int years;

    public double getStartingSalary() {
        return startingSalary;
    }

    public void setStartingSalary(double startingSalary) {
        this.startingSalary = startingSalary;
    }

    public double getIncrementPercent() {
        return incrementPercent;
    }

    public void setIncrementPercent(double incrementPercent) {
        this.incrementPercent = incrementPercent;
    }

    public int getNumberOfIncrements() {
        return numberOfIncrements;
    }

    public void setNumberOfIncrements(int numberOfIncrements) {
        this.numberOfIncrements = numberOfIncrements;
    }

    public double getDeductionPercent() {
        return deductionPercent;
    }

    public void setDeductionPercent(double deductionPercent) {
        this.deductionPercent = deductionPercent;
    }

    public int getNumberOfDeductions() {
        return numberOfDeductions;
    }

    public void setNumberOfDeductions(int numberOfDeductions) {
        this.numberOfDeductions = numberOfDeductions;
    }

    public int getYears() {
        return years;
    }

    public void setYears(int years) {
        this.years = years;
    }
}

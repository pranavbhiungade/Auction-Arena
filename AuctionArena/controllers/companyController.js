const mongoose = require("mongoose");

const Company = require("../models/company");
const Team = require("../models/team");
const Domain = require("../models/domain");

exports.sellCompany = async (req, res) => {
    try {
      if(!req.body.companyId || !req.body.teamId || !req.body.soldAt || req.body.soldAt<=0){
        return res.status(404).json({ message: "Enter all the valid Fields" });
      }
      const { companyId, teamId ,soldAt } = req.body;
  
      // Find the company and team
      const company = await Company.findById(companyId);
      const team = await Team.findById(teamId);
      
      if (!company || !team) {
        return res.status(404).json({ message: "Company or Team not found" });
      }
  
      if (company.sold) {
        return res.status(400).json({ message: "Company is already sold" });
      }
      
      if(team.budget < soldAt){
        return res.status(400).json({ message: "The Bid exceeds available amount" });
      }
      // Update company as sold

      company.sold = true;
      company.soldTo = team._id;
      company.soldAt = soldAt;
  
      // Update team's budget
      team.budget -= company.soldAt;
      team.purchasedCompanies.push(company._id);
  
      await company.save();
      await team.save();
  
      res.status(200).json({ message: "Company sold successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error selling company", error });
    }
  };

exports.createCompany = async (req, res) => {
    try {
      const { name, logo, basePrice,domain, rating, marketCapital } = req.body;
      if(!name || !logo || !basePrice || !domain || !rating || !marketCapital){
        return res.status(400).json({ message: "Please enter all the details" });
      }

      if(basePrice < 0){
        return res.status(400).json({ message: "Please enter valid base price" });
      }

      if(marketCapital < 0){
        return res.status(400).json({ message: "Please enter valid market capital" });
      }

      if(rating >5 || rating < 1){
        return res.status(400).json({ message: "Please enter valid rating" });
      }

      if(basePrice > 500000){
        return res.status(400).json({ message: "Base price exceeds the maximum limit of 500000" });
      }

      if(marketCapital > 50000000){
        return res.status(400).json({ message: "Market capital exceeds the maximum limit of 500000" });
      }
  
      const newCompany = new Company({
        name,
        logo,
        basePrice,
        domain,
        rating,
        marketCapital
      });
  
      await newCompany.save();
      res.status(201).json({ message: "Company created successfully", company: newCompany });
    } catch (error) {
      res.status(500).json({ message: "Error creating company", error });
    }
  };

exports.deleteCompany = async (req, res) => {
    try {
      const { companyId } = req.params;

      // Find the company by ID
      const company = await Company.findById(companyId);

      if (!company) {
        return res.status(404).json({ message: "Company not found" });
      }

      // Delete the company
      await Company.findByIdAndDelete(companyId);

      res.status(200).json({ message: "Company deleted successfully" });
    } catch (error) {
      res.status(500).json({ message: "Error deleting company", error });
    }
  };

exports.getAllCompaniesData = async (req, res) => {
    try {
      // Find all companies and populate the domain and soldTo fields
      const companies = await Company.find().populate('domain').populate('soldTo');
  
      res.status(200).json({ companies });
    } catch (error) {
      res.status(500).json({ message: "Error retrieving companies data", error });
    }
};
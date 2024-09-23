const mongoose = require("mongoose");
const Company = require("../models/company");
const Team = require("../models/team");
const Domain = require("../models/domain");

exports.createDomain = async (req, res) => {
    try {
      const { name } = req.body;
      const regex = /^[^\d]+$/;

    if (!regex.test(name)) {
      return res.status(400).json({ message: 'Invalid domain name. Numbers are not allowed.' });
    }
  
      const newDomain = new Domain({
        name
      });
  
      await newDomain.save();
      res.status(201).json({ message: "Domain created successfully", domain: newDomain });
    } catch (error) {
      res.status(500).json({ message: "Error creating domain", error });
    }
  };


  exports.getAllDomains = async (req, res) => {
    try {
        const domains = await Domain.find();
        res.json(domains);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
};


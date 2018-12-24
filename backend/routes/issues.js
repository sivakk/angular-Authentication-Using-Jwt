var express = require("express");
var router = express.Router();
var Joi = require("joi");
var HttpStatus = require("http-status-codes");

const Issue = require("../models/issue");




router.get('/invoices', (req, res, next) => {
    Issue.find(function (err, issues) {
        if (err)
            res.json(err);
        else {
            res.json(issues);
        }

    })
});

router.get('/invoices/:id', (req, res, next) => {

    const { id } = req.params;
    Invoice.findById(id)
        .then(invoice => {
            if (!invoice) {
                return res.status(HttpStatus.NOT_FOUND).json({ err: 'Could not find any invoice' });
            }
            return res.json(invoice);
        })
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
});


router.post('/invoices', (req, res, next) => {





    const schema = Joi.object().keys({
        StudentId: Joi.string().required(),
        StudentName: Joi.string().required(),
        Email: Joi.string().required(),
        Class: Joi.string().required(),
        EnrollementYear: Joi.date().required(),
        City: Joi.string().required(),
        Country: Joi.string().required(),


        tax: Joi.number().optional(),
        rate: Joi.number().optional(),
    });
    const { error, value } = Joi.validate(req.body, schema);
    if (error && error.details) {
        return res.status(HttpStatus.BAD_REQUEST).json(error);
    }
    Issue.create(value)
        .then(invoice => res.json(invoice))
        .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
});


router.put('/invoices/:id', (req, res, next) => {

    {

        const { id } = req.params;
        const schema = Joi.object().keys({
            StudentId: Joi.string().optional(),
            StudentName: Joi.string().optional(),
            Email: Joi.string().optional(),
            Class: Joi.string().optional(),
            EnrollementYear: Joi.string().optional(),
            City: Joi.string().optional(),
            Country: Joi.string().optional(),
            date: Joi.date().optional(),
            due: Joi.date().optional(),
            qty: Joi.number()
                .integer()
                .optional(),
            tax: Joi.number().optional(),
            rate: Joi.number().optional(),
        });
        const { error, value } = Joi.validate(req.body, schema);
        if (error && error.details) {
            return res.status(HttpStatus.BAD_REQUEST).json(error);
        }
        Issue.findOneAndUpdate({ _id: id }, value, { new: true })
            .then(invoice => res.json(invoice))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(err));
    }










    // Issue.findOneAndUpdate({
    //     _id: req.params.id
    // }, {
    //         $set: {
    //             issuename: req.body.issuename,
    //             issuecontent: req.body.issuecontent
    //         }
    //     },
    //     function (err, result) {
    //         if (err) {
    //             res.json(err);
    //         } else {
    //             res.json(result)
    //         }

    //     });
});

router.delete('/invoices/:id', (req, res, next) => {
    Issue.deleteOne({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;
import _ from "lodash";
import Qcode from "../models/Qcode.model";

const home = (req, res) => {
  Qcode.find((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }

    res.status(200).json(data);
  });
};

const create = (req, res) => {
  const qr = Qcode(req.body);
  qr.save((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(201).json(data);
  });
};

const list = (req, res) => {
  Qcode.find((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }

    res.status(200).json(data);
  });
};

const getQrCode = (req, res) => {
  const id = req.params.id;
  Qcode.findById(id).exec((err, data) => {
    if (err) {
      return res.status(400).json(err.message);
    }
    res.status(200).json(data);
  });
};

const remove = (req, res) => {
  const id = req.params.id;
  Qcode.findById(id).exec((err, data) => {
    if (err || !data) {
      return res.status(400).json("Qr-code not found!");
    }
    data.remove((err, data) => {
      if (err) {
        return res.status(400).json(err.message);
      }
      res.status(200).json("Qr-code successfully deleted.");
    });
  });
};

export default { list, remove, create, getQrCode, home };

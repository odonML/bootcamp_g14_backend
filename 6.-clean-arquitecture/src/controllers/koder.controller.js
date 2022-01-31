const {
    caseGetAllKoders,
    casePostKoder,
    caseDeleteKoder,
} = require("../usercase/koder.case");

async function conGetAllKoders(req, res) {
    try {
        const allKoder = await caseGetAllKoders();
        res.status(200).json({
            ok: true,
            data: allKoder,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msj: "bad GET",
        });
    }
}

async function conPostKoder(req, res) {
    const data = req.body;
    try {
        const koder = await casePostKoder(data);
        res.status(201).json({
            ok: true,
            data: koder,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msj: "bad POST",
        });
    }
}

async function conDeleteKoder(req, res) {
    const id = req.params.id;
    try {
        await caseDeleteKoder(id);
        res.status(200).json({
            ok: true,
            data: "koder delete",
        });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            ok: false,
            msj: "bad DELETE",
        });
    }
}

module.exports = {
    conGetAllKoders,
    conPostKoder,
    conDeleteKoder,
};

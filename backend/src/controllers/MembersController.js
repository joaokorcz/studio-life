const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { name, cpf, cellphone, address, email, payment_frequency, training, workout_frequency } = request.body;

        try {
            await connection('members').insert({
                name: name,
                cpf: cpf,
                cellphone: cellphone,
                address: address,
                email: email,
                registration_date: '2020-12-04T15:30:00.000Z',
                status: 'ok',
                last_payment: null,
                payment_frequency: payment_frequency,
                training: training,
                workout_frequency: workout_frequency
            })
            return response.status(200).json({ status: 'Membro criado!' });

        } catch(error) {
            return response.status(400).json({ error: error });

        }

    },

    async index(request, response) {

        const { page = 1 } = request.query;

        try{
            const members = await connection('members').limit(10).offset((page - 1) * 10).select('*');

            return response.status(200).json(members);

        } catch(error) {
            return response.status(400).json({ error: error });

        }      

    },

    async delete(request, response) {
        
        const { id_member } = request.body;

        try{
            await connection('members').where({
                id_member: id_member
            }).delete();
            return response.status(200).json({ status: 'Membro removido!' });

        } catch(error) {
            return response.status(400).json({ error: error });

        }

    },
}
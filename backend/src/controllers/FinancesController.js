const connection = require('../database/connection');

module.exports = {

    async create(request, response) {

        const { id_operator, value, type, id_member, future_date, description } = request.body;

        try {
            await connection('finances').insert({
                id_operator: id_operator,
                operation_date: '2021-02-04T15:30:00.000Z',
                value: value,
                type: type,
                id_member: id_member,
                future_date: future_date,
                description: description
            });

            return response.status(200).json({ status: 'Operação lançada!' });

        } catch (error) {
            return response.status(400).json({ error: error });

        }
    },

    async index(request, response) {

        const { page = 1 } = request.query;

        try{
            const finances = await connection('finances').limit(10).offset((page - 1) * 10).select('*');
            
            let financial = {
                finances: finances,
                total: 0,
                total_30: 0,
                total_60: 0
            };

            const allFinances = await connection('finances').select('*');
            
            for (const finance of allFinances) {
                financial.total += finance.value;
            }

            return response.status(200).json( financial );

        } catch(error) {
            return response.status(400).json({ error: error });

        }

    }

}
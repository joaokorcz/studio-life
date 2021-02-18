const connection = require('../database/connection');

module.exports = {

    async createNowOperation(request, response) {

        const { id_operator, value, description } = request.body;

        try {
            await connection('finances').insert({
                id_operator: id_operator,
                operation_date: new Date((new Date()).setHours(new Date().getHours()-3)).toISOString(),
                value: value,
                type: 'now',
                id_member: null,
                future_date: null,
                description: description
            });

            return response.status(200).json({ status: 'Operação lançada!' });

        } catch (error) {
            return response.status(400).json({ error: error });

        }
    },

    async createFutureOperation(request, response) {

        const { id_operator, value, description, future_date } = request.body;

        try {
            await connection('finances').insert({
                id_operator: id_operator,
                operation_date: new Date((new Date()).setHours(new Date().getHours()-3)).toISOString(),
                value: value,
                type: 'future',
                id_member: null,
                future_date: future_date,
                description: description
            });

            return response.status(200).json({ status: 'Operação programada!' });

        } catch (error) {
            return response.status(400).json({ error: error });

        };
    },

    async receiveMemberPayment(request, response) {

        const { id_member, id_operator, value, description } = request.body;

        try {
            await connection('finances').insert({
                id_operator: id_operator,
                operation_date: new Date((new Date()).setHours(new Date().getHours()-3)).toISOString(),
                value: value,
                type: 'payment',
                id_member: id_member,
                future_date: null,
                description: description
            });

            await connection('members').where('id_member', id_member).update({
                status: 'ok',
                last_payment: new Date((new Date()).setHours(new Date().getHours()-3)).toISOString()
            });

            return response.status(200).json({ status: 'Pagamento recebido!' });

        } catch(error) {
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
                if(finance.type !== 'future'){
                    financial.total += finance.value;
                }
            }

            return response.status(200).json( financial );

        } catch(error) {
            return response.status(400).json({ error: error });

        }

    },

    async delete(request, response) {

        const { id_finance } = request.body;

        try{
            await connection('finances').where('id_finance', id_finance).delete();
            return response.status(200).json({ status: 'Finança removida!' });

        } catch(error) {
            return response.status(400).json({ error: error });

        }

    }

}
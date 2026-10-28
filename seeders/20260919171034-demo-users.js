'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    await queryInterface.bulkInsert('Users', [{
        name: 'Aji',
        email: 'aji@mail.com'
        password_hash: '2b$10$contohHashBrcyptYangPanjang...;,
        createdAt: new Date(),
        updatedAt: new Date(),
   
      }]);
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users', null, {});    


  },
};

'use strict';

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/
const Role = use('Role');

class RoleSeeder {
  async run() {
    const admin = await Role.create({
      name: 'Admin',
      slug: 'admin',
      description: 'Administrador do sistema',
    });

    await Role.create({
      name: 'Manager',
      slug: 'manager',
      description: 'Gerente da Loja!',
    });

    await Role.create({
      name: 'Client',
      slug: 'client',
      description: 'Cliente da Loja!',
    });
  }
}

module.exports = RoleSeeder;

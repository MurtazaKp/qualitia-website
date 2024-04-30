/* 
...
LOCAL
...
*/

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 5432),
      database: env("DATABASE_NAME", "Qualitia"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "Qualitia@123"),
      schema: env("DATABASE_SCHEMA", "public"),
    },
    debug: false,
  },
});

/*
...
LIVE
...
*/
// module.exports = ({ env }) => ({
//   connection: {
//     client: 'postgres',
//     connection: {
//       host: env('DATABASE_HOST', 'dpg-ceql4682i3mov0i3d2i0-a.oregon-postgres.render.com'),
//       port: env.int('DATABASE_PORT', 5432),
//       database: env('DATABASE_NAME', 'cubyts_2d93'),
//       user: env('DATABASE_USERNAME', 'admin'),
//       password: env('DATABASE_PASSWORD', 'LCARYP7WDDov1p0XM0KMo65RjOXKnt9Z'),
//       schema: env('DATABASE_SCHEMA', 'public'), // Not required
//       ssl: env.bool('DATABASE_SSL_SELF', true),
//     },
//     debug: false,
//   },
// });

import nodemailer from 'nodemailer';

const emailRegistro = async (datos) => {
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	});

	const { email, nombre, token } = datos;

	// Enviar el email
	await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: '¡Verifica tu cuenta en BienesRaices.com!',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <p style="font-size: 16px; line-height: 1.6;">Hola ${nombre},</p>
                <p style="font-size: 16px; line-height: 1.6;">Para completar tu registro, confirma tu correo electrónico haciendo clic en el siguiente enlace:</p>
                <p><a href="${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/auth/confirm/${token}" style="color: #0066cc; text-decoration: none;">Confirmar mi cuenta</a></p>
                <p style="font-size: 16px; line-height: 1.6;">¡Gracias por ser parte de BienesRaices.com!</p>
                <br>
                <p style="font-size: 14px; color: #666;">Saludos,</p>
                <p style="font-size: 14px; color: #666;">Angel de Jesus Baños</p>
            </div>
        `
    });
};

const emailOlvidePassword = async (datos) => {
	const transport = nodemailer.createTransport({
		host: process.env.EMAIL_HOST,
		port: process.env.EMAIL_PORT,
		auth: {
			user: process.env.EMAIL_USER,
			pass: process.env.EMAIL_PASS
		}
	});

	const { email, nombre, token } = datos;

	// Enviar el email
	await transport.sendMail({
        from: 'BienesRaices.com',
        to: email,
        subject: 'Solicitud de cambio de contraseña en BienesRaices.com!',
        html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
                <p style="font-size: 16px; line-height: 1.6;">Hola ${nombre},</p>
                <p style="font-size: 16px; line-height: 1.6;">Has solicitado restablecer tu contraseña. Haz clic en el siguiente enlace para crear una nueva contraseña:</p>
                <p><a href="${process.env.BACKEND_URL}:${process.env.BACKEND_PORT}/auth/reset-password/${token}" style="color: #0066cc; text-decoration: none;">Restablecer mi contraseña</a></p>
                <p style="font-size: 16px; line-height: 1.6;">¡Gracias por ser parte de BienesRaices.com!</p>
                <br>
                <p style="font-size: 14px; color: #666;">Saludos,</p>
                <p style="font-size: 14px; color: #666;">Angel de Jesus Baños</p>
            </div>
        `
    });
};

export {
	emailRegistro,
	emailOlvidePassword
};

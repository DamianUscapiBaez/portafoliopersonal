import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

interface FormData {
    name: string;
    email: string;
    message: string;
}

const inputStyles = "w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500";

const containerVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
};

const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
};

const buttonVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    loading: { opacity: 1, scale: 0.8 },
};

export const Contact: React.FunctionComponent = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    });

    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [isLoading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setButtonDisabled(true);
        setLoading(true);

        try {
            const response = await fetch('https://jurisprudenciadocumentos.gylabogados.com/api/emailsend.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
                Swal.fire({
                    icon: 'success',
                    title: 'Éxito',
                    text: 'Formulario enviado con éxito',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Error al enviar el formulario',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Error de red',
            });
        } finally {
            setButtonDisabled(false);
            setLoading(false);
        }
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="min-h-screen flex flex-col md:flex-row items-center justify-center w-full relative z-20"
        >
            <motion.div
                className="flex-1 md:items-center px-6 mx-auto md:max-w-4xl pt-8 pb-16 overflow-hidden text-center md:text-left"
            >
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-6 md:text-4xl text-center font-extrabold text-amber-500"
                >
                    ¡Contáctame!
                </motion.h1>
                <motion.form
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                    onSubmit={handleSubmit}
                    className="w-full max-w-md mx-auto bg-white p-8 rounded-md shadow-md text-amber-400"
                >
                    <motion.div variants={inputVariants} className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className={inputStyles}
                            required
                        />
                    </motion.div>
                    <motion.div variants={inputVariants} className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={inputStyles}
                            required
                        />
                    </motion.div>
                    <motion.div variants={inputVariants} className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                            Mensaje
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className={inputStyles}
                            required
                        ></textarea>
                    </motion.div>
                    <motion.button
                        type="submit"
                        variants={buttonVariants}
                        className={`bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:bg-indigo-700 w-full ${isLoading ? 'cursor-not-allowed' : ''}`}
                        disabled={isButtonDisabled}
                    >
                        {isLoading ? 'Enviando...' : 'Enviar'}
                    </motion.button>
                </motion.form>
            </motion.div>
        </motion.div>
    );
};

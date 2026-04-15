/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle2, RotateCcw, Save } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zip: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      idNumber: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-10 bg-bg">
      <header className="w-full max-w-[800px] mb-[30px] border-l-4 border-accent pl-5">
        <h1 className="text-2xl tracking-[1px] uppercase mb-1 font-bold">Patitas & Co.</h1>
        <p className="text-text-dim text-sm">Portal de Gestión de Clientes | Módulo de Registro CRM</p>
      </header>

      <main className="w-full max-w-[800px] bg-card p-10 rounded-xl border border-border shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
        <AnimatePresence mode="wait">
          {!submitted ? (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              onSubmit={handleSubmit}
              id="client-form"
            >
              {/* Personal Data Section */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <h2 className="col-span-2 text-[12px] uppercase text-accent tracking-[2px] border-bottom border-border pb-2 mb-2 border-b">
                  Datos Personales
                </h2>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[11px] font-semibold text-text-dim uppercase">Nombre</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Ej: Juan Carlos"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[11px] font-semibold text-text-dim uppercase">Apellidos</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Ej: Pérez García"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <label htmlFor="idNumber" className="text-[11px] font-semibold text-text-dim uppercase">DNI / NIE / Pasaporte</label>
                  <input
                    type="text"
                    id="idNumber"
                    name="idNumber"
                    required
                    value={formData.idNumber}
                    onChange={handleChange}
                    placeholder="00000000X"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              {/* Contact & Address Section */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <h2 className="col-span-2 text-[12px] uppercase text-accent tracking-[2px] border-bottom border-border pb-2 mb-2 border-b">
                  Contacto y Dirección
                </h2>

                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-[11px] font-semibold text-text-dim uppercase">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="juan.perez@ejemplo.com"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="phone" className="text-[11px] font-semibold text-text-dim uppercase">Teléfono</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+34 600 000 000"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2 col-span-2">
                  <label htmlFor="address" className="text-[11px] font-semibold text-text-dim uppercase">Dirección Completa</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    required
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Calle Mayor, 15, 2B"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="city" className="text-[11px] font-semibold text-text-dim uppercase">Ciudad</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Madrid"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="zip" className="text-[11px] font-semibold text-text-dim uppercase">Código Postal</label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    required
                    value={formData.zip}
                    onChange={handleChange}
                    placeholder="28001"
                    className="bg-input-bg border border-border text-text-main p-3 rounded-md text-sm outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-4 mt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-8 py-3 rounded-md font-semibold cursor-pointer text-sm bg-transparent text-text-dim border border-border hover:bg-white/5 transition-colors flex items-center gap-2"
                  id="clear-btn"
                >
                  <RotateCcw className="w-4 h-4" />
                  Limpiar Formulario
                </button>
                <button
                  type="submit"
                  className="px-8 py-3 rounded-md font-semibold cursor-pointer text-sm bg-accent text-black hover:opacity-90 transition-opacity flex items-center gap-2"
                  id="submit-btn"
                >
                  <Save className="w-4 h-4" />
                  Guardar Cliente
                </button>
              </div>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-10 text-center"
              id="success-message"
            >
              <CheckCircle2 className="w-16 h-16 text-accent mb-6" />
              <h2 className="text-2xl font-bold mb-2">¡Cliente Registrado!</h2>
              <p className="text-text-dim mb-8">
                Los datos de <strong>{formData.firstName} {formData.lastName}</strong> han sido guardados correctamente en el sistema.
              </p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-md font-semibold cursor-pointer text-sm bg-accent text-black hover:opacity-90 transition-opacity"
              >
                Registrar Nuevo Cliente
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-auto pt-10 text-[11px] text-text-dim text-center">
        ID de Sesión: SEL-TEST-2023 | Entorno de Pruebas de Automatización Selenium
      </footer>
    </div>
  );
}


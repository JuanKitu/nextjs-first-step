import React from 'react'
import { FaCheck, FaArrowRight, FaSpinner } from 'react-icons/fa';
import { Button } from "@/app/components/Button/Button";

export default function CounterPage() {
    return (
        <>
            <div>CounterPage</div>
            <div className="flex flex-col gap-4 p-4">
                <Button size="xs" variant="success" icon={<FaCheck />}>
                    Botón Extra Pequeño
                </Button>

                <Button size="sm" variant="primary" icon={<FaArrowRight />} iconPosition="right">
                    Botón Pequeño
                </Button>

                <Button size="md" variant="danger" loading icon={<FaSpinner className="animate-spin" />}>
                    Botón Mediano
                </Button>

                <Button
                    size="lg"
                    href="/dashboard/main"
                    variant="purple"
                    styleType="outline"
                    icon={<FaArrowRight />}
                    iconPosition="right"
                >
                    Botón Grande
                </Button>

                <Button
                    size="xl"
                    variant="warning"
                    icon={<FaCheck />}
                >
                    Botón Extra Grande
                </Button>
                <Button size="xs" width="short" variant="success" icon={<FaCheck />}>
                    Botón Corto
                </Button>

                <Button size="xl" width="full" variant="primary">
                    Botón Largo (Full)
                </Button>

                <Button size="md" width="default" variant="warning">
                    Ancho Estándar
                </Button>

            </div>
        </>
    )
}
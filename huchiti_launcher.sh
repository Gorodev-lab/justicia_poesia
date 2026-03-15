#!/bin/bash
# Script de Lanzamiento Infalible - Justicia Filosófica

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
cd "$DIR" || exit 1

echo "=================================================="
echo "    Iniciando Huchití OS (Justicia Filosófica)    "
echo "=================================================="
echo "-> Directorio resuelto: $DIR"

# Limpieza inicial agresiva (en caso de procesos huérfanos anteriores)
# Esto garantiza el "lanzamiento perfecto" sin colisiones de puerto
fuser -k 3000/tcp 2>/dev/null
fuser -k 3002/tcp 2>/dev/null

echo "-> Lanzando Backend (tsx server.ts) en el puerto 3002..."
npx tsx server.ts &
BACKEND_PID=$!

echo "-> Lanzando Frontend (Vite) en el puerto 3000..."
npx vite --port=3000 --host=0.0.0.0 &
FRONTEND_PID=$!

cleanup() {
    echo ""
    echo "=================================================="
    echo "    Cerrando Justicia Filosófica...               "
    echo "    (Media noche en punto)                        "
    echo "=================================================="
    # Kill the processes directly using their PIDs
    kill -TERM $BACKEND_PID 2>/dev/null
    kill -TERM $FRONTEND_PID 2>/dev/null
    # Kill any lingering node/vite processes attached to these specific ports
    fuser -k 3000/tcp 2>/dev/null
    fuser -k 3002/tcp 2>/dev/null
    exit 0
}

trap cleanup SIGINT SIGTERM EXIT

wait

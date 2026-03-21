#!/usr/bin/env python3
import re
import sys

def uchiti_phonetic_parser(text):
    """
    Simula el pipeline de pre-procesamiento del motor Huchití OS.
    Diseñado para erradicar el acento ibérico y forzar fonética decolonial.
    """
    # 1. Limpiezay normalización
    text = text.lower().strip()
    
    # 2. Validación de letras prohibidas (Huchití NO usa F, G, L, X, Z)
    forbidden = re.findall(r'[fglxz]', text)
    if forbidden:
        print(f"[ERROR] Letras prohibidas detectadas: {set(forbidden)}")
        text = re.sub(r'[fglxz]', '', text)

    # 3. Mapeo Fonético Colonial (tsch -> ch)
    text = text.replace("tsch", "ch")
    
    # 4. Glotización de vocales dobles (referencia LKT)
    text = re.sub(r'([aeiou])\1', r'\1-\1', text)
    
    # 5. Aspiración de cierres (k -> kh, etc.)
    text = re.sub(r'k(?=\s|$|\.)', 'kh', text)
    text = re.sub(r't(?=\s|$|\.)', 'th', text)
    text = re.sub(r'p(?=\s|$|\.)', 'ph', text)
    
    # 6. Duplicación silábica (nn -> n.n)
    text = text.replace("nn", "n.n").replace("mm", "m.m")
    
    # 7. Ritmo de tambor (Pausa entre palabras)
    text = re.sub(r'\s+', '. ', text)
    
    return text

def test_suite():
    tests = [
        ("Datembà tschari", "datembà chari"),              # tsch -> ch
        ("Umutù nn", "umutu n.n"),                        # nn -> n.n
        ("Kuitscharrakè", "kuitcharra-kè"),                # glotización si hubiera vocales dobles
        ("Aëna", "a-ëna"),                               # glotización
        ("Llakatè", "akathe"),                            # L eliminada, t final aspirada
        ("Xiz", ""),                                     # X y Z eliminadas
    ]
    
    print("\n[HUCHITÍ AUDIO TEST SUITE]")
    print("-" * 30)
    for input_text, expected in tests:
        result = uchiti_phonetic_parser(input_text)
        status = "OK" if result.startswith(expected) or result == expected else "FAIL"
        print(f"INPUT: {input_text}")
        print(f"RESULT: {result}")
        print(f"STATUS: {status}\n")

if __name__ == "__main__":
    if len(sys.argv) > 1:
        print(uchiti_phonetic_parser(" ".join(sys.argv[1:])))
    else:
        test_suite()

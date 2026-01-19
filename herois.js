class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.xp = 0; // Inicia com 0 de experiência
        this.nivel = 1; // Inicia no nível 1
    }

    // Método para definir a descrição do ataque
    obterDescricaoAtaque() {
        const ataques = {
            'mago': 'magia',
            'guerreiro': 'espada',
            'monge': 'artes marciais',
            'ninja': 'shuriken'
        };
        return ataques[this.tipo.toLowerCase()] || 'um ataque básico';
    }

    // Método principal de ataque
    atacar() {
        const ataque = this.obterDescricaoAtaque();
        console.log(`O ${this.tipo} chamado ${this.nome} atacou usando ${ataque}`);
        
        // Ganha XP a cada ataque
        this.ganharXP(35); 
    }

    // Sistema de experiência e evolução
    ganharXP(quantidade) {
        this.xp += quantidade;
        console.log(`${this.nome} ganhou ${quantidade} de XP! (Total: ${this.xp})`);

        // Lógica de Level Up: cada nível exige 100 de XP
        // Ex: Nível 2 = 100 XP, Nível 3 = 200 XP...
        let xpNecessario = this.nivel * 100;

        if (this.xp >= xpNecessario) {
            this.subirDeNivel();
        }
    }

    subirDeNivel() {
        this.nivel++;
        console.log(`⭐ PARABÉNS! ${this.nome} subiu para o Nível ${this.nivel}! ⭐`);
    }
}

// --- Simulação da Jornada ---

const herois = [
    new Heroi("Gandalf", 2000, "mago"),
    new Heroi("Arthur", 35, "guerreiro"),
    new Heroi("Lee", 25, "monge"),
    new Heroi("Hattori", 28, "ninja")
];

console.log("--- Iniciando das Batalhas ---\n");
turno=0;
// Laço de repetição para percorrer cada herói e chamar o método atacar
for (let i = 0; i < herois.length; i++) {
    console.log(`\n--- Turno ${++turno} ---`);
    herois[i].atacar();
}

console.log(`\n--- Status Final ---`);
for (let i = 0; i < herois.length; i++) {
    const heroi = herois[i];
    console.log(`Nome: ${heroi.nome} | Nível: ${heroi.nivel} | XP Total: ${heroi.xp}`);
}

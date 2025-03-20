export default class PostUtils {
    private static titreAvecRandom: string = '';

    public static setTitreAvecRandom(titre: string) {
        this.titreAvecRandom = titre;
    }

    public static getTitreAvecRandom(): string {
        return this.titreAvecRandom;
    }
}

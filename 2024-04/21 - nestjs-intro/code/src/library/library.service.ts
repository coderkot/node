import { HttpException, HttpStatus, Injectable, Scope } from '@nestjs/common';
import { Library } from './models/library';

@Injectable({ scope: Scope.REQUEST, })
export class LibraryService {
    private libraries: Library[];
    private id = 1;
    constructor() {
        console.log('ya ctr');
        this.libraries = [
            new Library(this.id++, 'Библиотека им. Ленина', 'Ленина 1'),
            new Library(this.id++, 'Библиотека Зарубежной литературы', 'Комсомольская 5'),
        ];
    }

    public getLibraries(): Library[] {
        return this.libraries;
    }

    public get(id: number): Library {
        for (const l of this.getLibraries()) {
            if (l.id === id) {
                return l;
            }
        }
        return null;
    }

    public create(lib: Library): void {
        this.libraries.push(new Library(this.id++, lib.name, lib.address));
    }


    public close(id: number): void {
        const lib = this.get(id);

        lib.open = false;
    }


}

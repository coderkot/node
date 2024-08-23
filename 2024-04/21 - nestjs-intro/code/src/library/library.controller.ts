import { Body, Controller, Get, HttpException, HttpStatus, Param, Post, Query } from '@nestjs/common';
import { LibraryService } from './library.service';
import { Library } from './models/library';

@Controller('lib')
export class LibraryController {
    constructor(private libService: LibraryService) {
        
     }

    @Get()
    index(@Query() q: any): any {
        return { data: this.libService.getLibraries(), ...q };
    }

    @Get(':id')
    getSingle(@Param('id') id: string) {
        const lib = this.libService.get(+id);
        if (!lib)
            throw new HttpException(`По id=${id} библиотека не найдена`, HttpStatus.NOT_FOUND);
        return lib;
    }

    @Post()
    create(@Body() lib: Library) {
        this.libService.create(lib);
        console.log(this.libService.getLibraries());
    }

    @Post(':id/close')
    closeLibrary(@Param('id') id: string) {
        try {
            this.libService.close(+id);
        }
        catch (error) {
            console.log(error);
            return { ok: false };
        }
    }
}

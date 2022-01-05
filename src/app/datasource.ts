export let virtualData: any[] = [];
    export function dataSource(): void {
        let parent: number = -1;
        let crew: string = 'Crew';
        let parentId: number ;
        let names: string[] = ['VINET', 'TOMSP', 'HANAR', 'VICTE', 'SUPRD', 'HANAR', 'CHOPS', 'RICSU', 'WELLI', 'HILAA', 'ERNSH', 'CENTC',
        'OTTIK', 'QUEDE', 'RATTC', 'ERNSH', 'FOLKO', 'BLONP', 'WARTH', 'FRANK', 'GROSR', 'WHITC', 'WARTH', 'SPLIR', 'RATTC', 'QUICK', 'VINET',
        'MAGAA', 'TORTU', 'MORGK', 'BERGS', 'LEHMS', 'BERGS', 'ROMEY', 'ROMEY', 'LILAS', 'LEHMS', 'QUICK', 'QUICK', 'RICAR', 'REGGC', 'BSBEV',
        'COMMI', 'QUEDE', 'TRADH', 'TORTU', 'RATTC', 'VINET', 'LILAS', 'BLONP', 'HUNGO', 'RICAR', 'MAGAA', 'WANDK', 'SUPRD', 'GODOS', 'TORTU',
        'OLDWO', 'ROMEY', 'LONEP', 'ANATR', 'HUNGO', 'THEBI', 'DUMON', 'WANDK', 'QUICK', 'RATTC', 'ISLAT', 'RATTC', 'LONEP', 'ISLAT', 'TORTU',
        'WARTH', 'ISLAT', 'PERIC', 'KOENE', 'SAVEA', 'KOENE', 'BOLID', 'FOLKO', 'FURIB', 'SPLIR', 'LILAS', 'BONAP', 'MEREP', 'WARTH', 'VICTE',
        'HUNGO', 'PRINI', 'FRANK', 'OLDWO', 'MEREP', 'BONAP', 'SIMOB', 'FRANK', 'LEHMS', 'WHITC', 'QUICK', 'RATTC', 'FAMIA'];
        for (let i: number = 0; i < 50000; i++) {        
            if (i % 5 === 0) {
                parent = i;
            }
            if (i % 5 !== 0) {
                let num:number = isNaN((virtualData.length % parent)- 1) ?  0 : (virtualData.length % parent) - 1;
                virtualData[num][crew].push({
                    'TaskID': i + 1,
                    'FIELD1': names[Math.floor(Math.random() * names.length)],
                    'FIELD2': 1967 + (i % 10),
                    'FIELD3': Math.floor(Math.random() * 200),
                    'FIELD4': Math.floor(Math.random() * 100),
                    'FIELD5': Math.floor(Math.random() * 2000),
                    'FIELD6': Math.floor(Math.random() * 1000),
                    'FIELD7': Math.floor(Math.random() * 100),
                    'FIELD8': Math.floor(Math.random() * 10),
                    'FIELD9': Math.floor(Math.random() * 10),
                    'FIELD10': Math.floor(Math.random() * 100),
                    'FIELD11': Math.floor(Math.random() * 100),
                    'FIELD12': Math.floor(Math.random() * 1000),
                    'FIELD13': Math.floor(Math.random() * 10),
                    'FIELD14': Math.floor(Math.random() * 10),
                    'FIELD15': Math.floor(Math.random() * 1000),
                    'FIELD16': Math.floor(Math.random() * 200),
                    'FIELD17': Math.floor(Math.random() * 300),
                    'FIELD18': Math.floor(Math.random() * 400),
                    'FIELD19': Math.floor(Math.random() * 500),
                    'FIELD20': Math.floor(Math.random() * 700),
                    'FIELD21': Math.floor(Math.random() * 800),
                    'FIELD22': Math.floor(Math.random() * 1000),
                    'FIELD23': Math.floor(Math.random() * 2000),
                    'FIELD24': Math.floor(Math.random() * 150),
                    'FIELD25': Math.floor(Math.random() * 1000),
                    'FIELD26': Math.floor(Math.random() * 100),
                    'FIELD27': Math.floor(Math.random() * 400),
                    'FIELD28': Math.floor(Math.random() * 600),
                    'FIELD29': Math.floor(Math.random() * 500),
                    'FIELD30': Math.floor(Math.random() * 300),
                });
            } else {
                virtualData.push({
                    'TaskID': i + 1,
                    'Crew': [],
                    'FIELD1': names[Math.floor(Math.random() * names.length)],
                    'FIELD2': 1967 + (i % 10),
                    'FIELD3': Math.floor(Math.random() * 200),
                    'FIELD4': Math.floor(Math.random() * 100),
                    'FIELD5': Math.floor(Math.random() * 2000),
                    'FIELD6': Math.floor(Math.random() * 1000),
                    'FIELD7': Math.floor(Math.random() * 100),
                    'FIELD8': Math.floor(Math.random() * 10),
                    'FIELD9': Math.floor(Math.random() * 10),
                    'FIELD10': Math.floor(Math.random() * 100),
                    'FIELD11': Math.floor(Math.random() * 100),
                    'FIELD12': Math.floor(Math.random() * 1000),
                    'FIELD13': Math.floor(Math.random() * 10),
                    'FIELD14': Math.floor(Math.random() * 10),
                    'FIELD15': Math.floor(Math.random() * 1000),
                    'FIELD16': Math.floor(Math.random() * 200),
                    'FIELD17': Math.floor(Math.random() * 300),
                    'FIELD18': Math.floor(Math.random() * 400),
                    'FIELD19': Math.floor(Math.random() * 500),
                    'FIELD20': Math.floor(Math.random() * 700),
                    'FIELD21': Math.floor(Math.random() * 800),
                    'FIELD22': Math.floor(Math.random() * 1000),
                    'FIELD23': Math.floor(Math.random() * 2000),
                    'FIELD24': Math.floor(Math.random() * 150),
                    'FIELD25': Math.floor(Math.random() * 1000),
                    'FIELD26': Math.floor(Math.random() * 100),
                    'FIELD27': Math.floor(Math.random() * 400),
                    'FIELD28': Math.floor(Math.random() * 600),
                    'FIELD29': Math.floor(Math.random() * 500),
                    'FIELD30': Math.floor(Math.random() * 300),
                });
            }
        }
    }


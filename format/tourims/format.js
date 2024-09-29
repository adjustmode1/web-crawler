/** format struct
 * {
 *    input: {
 * 
 *    },
 *    output: {
 *    } 
 * }
 * 
 * 
 **/
const wikiPediaTourism = [
    {
        fileName: 'wiki_du_lich_viet_nam',
        link: 'https://vi.wikipedia.org/wiki/Du_l%E1%BB%8Bch_Vi%E1%BB%87t_Nam',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2'
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_gioi_thieu_dao_cat_ba',
        link: 'https://vi.wikipedia.org/wiki/Qu%E1%BA%A7n_%C4%91%E1%BA%A3o_C%C3%A1t_B%C3%A0',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_thung_lung_tinh_yeu',
        link: 'https://vi.wikipedia.org/wiki/Thung_l%C5%A9ng_T%C3%ACnh_Y%C3%AAu',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_thanh_co_quan_tri',
        link: 'https://vi.wikipedia.org/wiki/Th%C3%A0nh_c%E1%BB%95_Qu%E1%BA%A3ng_Tr%E1%BB%8B',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_sapa',
        link: 'https://vi.wikipedia.org/wiki/Sa_Pa',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_lao_cai',
        link: 'https://vi.wikipedia.org/wiki/L%C3%A0o_Cai',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_chu_tran_quoc',
        link: 'https://vi.wikipedia.org/wiki/Ch%C3%B9a_Tr%E1%BA%A5n_Qu%E1%BB%91c',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_ha_noi',
        link: 'https://vi.wikipedia.org/wiki/H%C3%A0_N%E1%BB%99i',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_nha_trang',
        link: 'https://vi.wikipedia.org/wiki/Nha_Trang',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_khanh_hoa',
        link: 'https://vi.wikipedia.org/wiki/Kh%C3%A1nh_H%C3%B2a',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_vinh_ha_long',
        link: 'https://vi.wikipedia.org/wiki/V%E1%BB%8Bnh_H%E1%BA%A1_Long',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_quan_ninh',
        link: 'https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Ninh',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_cu_lao_cham',
        link: 'https://vi.wikipedia.org/wiki/C%C3%B9_lao_Ch%C3%A0m',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_quang_nam',
        link: 'https://vi.wikipedia.org/wiki/Qu%E1%BA%A3ng_Nam',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_vuon_quoc_gia_phong_nha_ke_bang',
        link: 'https://vi.wikipedia.org/wiki/V%C6%B0%E1%BB%9Dn_qu%E1%BB%91c_gia_Phong_Nha_%E2%80%93_K%E1%BA%BB_B%C3%A0ng',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },
    {
        fileName: 'wiki_ninh_binh',
        link: 'https://vi.wikipedia.org/wiki/Du_l%E1%BB%8Bch_Ninh_B%C3%ACnh',
        input: {
            title: 'span.mw-page-title-main',
            body: [
                {
                    tag: 'div.mw-content-ltr.mw-parser-output',
                    type: 'list',
                    title: {
                        hasClass: 'mw-heading',
                        get: 'h2',
                    },
                    content: 'p'
                }
            ]
        },
    },

]

module.exports = {
    wikiPediaTourism
};
    
# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name' : 'Range slider field widget in version 15',
    'version' : '1.2',
    'summary': 'Range slider field widget',
    'sequence': 10,
    'description': """
    """,
    'depends' : ['base', 'sale'],
    'data': [
        'views/sale_order.xml',
    ],
    'demo': [

    ],
    'assets': {
        'web.assets_backend': [
            'range_slider_widget/static/src/css/range_slider_widget.css',
            'range_slider_widget/static/src/js/range_slider_widget.js',
        ],
        'web.assets_qweb': [
            'range_slider_widget/static/src/xml/range_slider_widget.xml',
        ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
}

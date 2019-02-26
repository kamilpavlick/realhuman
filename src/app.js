'use strict';
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

import $ from 'jquery';

window.$ = $;

import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/dist/sweetalert2.css';

$(document).ready(function () {
    $('#checkIfIamAHuman').click(function (e) {
        e.preventDefault();

        var $form = $(e.target.parentNode);

        $.ajax({
            url: $form.attr('action'),
            method: 'POST',
            data: $form.serialize(),
            success: function (data) {
                Swal.fire({
                    title: 'Result',
                    text: data,
                    type: 'success',
                }).then((result) => {
                    if (result.value) {
                        location.reload();
                    }
                });
            },
            error: function (jqXHR) {
                Swal.fire({
                    title: 'Result',
                    text: jqXHR.responseText,
                    type: 'error',
                }).then((result) => {
                    if (result.value) {
                        location.reload();
                    }
                });
            }
        });
    });
});


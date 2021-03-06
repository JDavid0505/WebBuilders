(function(global) {

	global.init = function(){
		menu.init();
		footer.init();
	};

	global.loginInit = function(){
		footer.init();
	};

	global.datepickerInit = function(){
		$.datepicker.regional['es'] = {
			closeText: 'Cerrar',
			prevText: '<Ant',
			nextText: 'Sig>',
			currentText: 'Hoy',
			monthNames: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
			monthNamesShort: ['Ene','Feb','Mar','Abr', 'May','Jun','Jul','Ago','Sep', 'Oct','Nov','Dic'],
			dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
			dayNamesShort: ['Dom','Lun','Mar','Mié','Juv','Vie','Sáb'],
			dayNamesMin: ['Do','Lu','Ma','Mi','Ju','Vi','Sá'],
			weekHeader: 'Sm',
			dateFormat: 'dd-mm-yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''
		};
		$.datepicker.setDefaults($.datepicker.regional['es']);
		$( ".datepicker" ).datepicker();
	};

	var menu = {
		init: function(){
			this.el = $('#main-menu');
			this.icon = $('#menu-icon');
			this.activeMenu();
			this.iconActive();
			this.el.on({
				mouseenter: $.proxy( this.iconOnHover, this ),
				mouseleave: $.proxy( this.iconActive, this )
			}, "> li > a");
			this.el.on({
				mouseenter: this.accountEnter,
				mouseleave: this.accountLeave
			}, "#account");
			//$('#logout').on( 'click',  );
			$('#username').text( SO.config.user );
		},
		activeMenu: function(){
			this.el.find('a[href*="'+SO.utils.currentFile()+'"]').parents('li').addClass('active');
		},
		iconOnHover: function(e){
			this.iconChange( $(e.target) );
		},
		iconActive: function(){
			this.iconChange( $('> li.active > a', this.el) );
		},
		iconChange: function(item){
			this.icon
				.removeClass()
				.addClass( 'icon-' + SO.utils.normalize( item.text() ).toLowerCase() );
		},
		accountEnter: function(){
			$('i:eq(1)', this).removeClass().addClass('icon-arrow-up');
		},
		accountLeave: function(){
			$('i:eq(1)', this).removeClass().addClass('icon-arrow-down');
		}
	};

	var footer = {
		init: function(){
			var self = this;
			this.popupWrap = $('#popup-wrap');
			this.popup = $('#popup');
			this.popupWrap.on( 'click', function(e){
				e.stopPropagation();
				if( $(e.target).hasClass('close') || e.target == e.currentTarget ){
					self.closePopUp();
				}
			});
			$('body').keyup(function(e) {
				if ( e.which == 27 && self.popupWrap.is(':visible') ) { //ESC
					console.log('esc');
					self.closePopUp();
				}
			});
		},
		closePopUp: function(){
			var self = this;
			self.popup.addClass('hide');
			setTimeout(function(){
				self.popupWrap.hide();
			}, 500 );
		}
	};

})(SO.global = {});
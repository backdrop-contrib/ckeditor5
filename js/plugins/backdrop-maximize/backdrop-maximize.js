(function (Backdrop, CKEditor5) {

  "use strict";

  class Maximize extends CKEditor5.core.Plugin {
    init() {
      const editor = this.editor;

      editor.ui.componentFactory.add( 'maximize', () => {
        const button = new CKEditor5.ui.ButtonView();

        button.set( {
          label: 'Maximize',
          tooltip: true,
          icon: '<svg width="20" height="20" version="1.1" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="m7 2h-5v5l1.8-1.8 2.7 2.8 1.5-1.5-2.8-2.7zm6 0 1.8 1.8-2.8 2.7 1.5 1.5 2.7-2.7 1.8 1.7v-5zm.5 10-1.5 1.5 2.7 2.7-1.7 1.8h5v-5l-1.8 1.8zm-7 0-2.7 2.7-1.8-1.7v5h5l-1.8-1.8 2.8-2.7z"/></svg>',
          isToggleable: true,
          isOn: false
        });

        button.on( 'execute', () => {
          const editorElement = editor.ui.view.element;

          if (editorElement.classList.contains('maximize-active')) {
            editorElement.classList.remove('maximize-active');
            button.isOn = false;
            editor.editing.view.focus();
          }
          else {
            editorElement.classList.add('maximize-active');
            button.isOn = true;
            editor.editing.view.focus();
          }
        });

        return button;
      });
    }
  }

  // Expose the plugin to the CKEditor5 namespace.
  CKEditor5.backdropMaximize = {
    'Maximize': Maximize
  };

})(Backdrop, CKEditor5);

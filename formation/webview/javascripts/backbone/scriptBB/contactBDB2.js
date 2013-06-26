/**
 * Created with JetBrains WebStorm.
 * User: Mediabox-4
 * Date: 26/06/13
 * Time: 11:17
 * To change this template use File | Settings | File Templates.
 */
var mb= mb || {};
( function ( $,mb)  {
    mb.views = mb.views || {};

    //vues
    mb.views.ContactView= Backbone.View.extend
    (
    {
        tagName :'li',
        model : null,
        template: _.template ($("#contact-template").html()),
        initialize:function ()
        {
            this.model.on('change', this.render, this);
            this.render()
        },
        events :
        {
            'click a': "linkClicked"
        },
        render : function ()
        {
            this.$el.html( this.template(this.model.toJSON()));
            return this;
        },
        linkClicked : function(event) {
            var contactRef= this;
            this.$el
                .append ("<input type='text' placeholder='modifier la valeur du nom' value='"+ this.model.get("prenom")+" "+ this.model.get('nom') +"'/>")
                .children ("input")
                    .focus()
                    .change(
                     function ()
                        {
                            var newcontact = $(this).val().split(" ");
                            //verfication des données
                            if (newcontact.length < 2){
                                contactRef.render();
                                return;
                            }
                            contactRef.model.set(
                                {
                                    "prenom": newcontact[0],
                                    "nom": newcontact[1]
                                }
                            ) ;
                        }
                    )
                .end()
            .children ('a')
                .hide ('slow');
         return false()
        }

    }
    );

    mb.views.ContactListView=Backbone.View.extend(
        {
            collection : null,
            initialize : function(){
                this.collection.on('reset',this.initContacts,this);
                this.collection.on('add',this.addContact,this);
                this.collection.on('all',this.traceEr,this);
            },
            initContacts: function(contact){
                var self =this;
                contact.each (
                    function (contact){
                        self.addContact(contact)
                    }
                )
            },
            addContact: function(contact){
                var contactView = new mb.views.ContactView ( {model:contact});
                this.$el.append (contactView.el);
            },
            traceEr: function(){
               console.dir(arguments)
            }
        }
    )

})(jQuery, mb)
/************BAckbone*************/
(function ($,mb) {
    /*--- initialisation de la webapp ---*/
    var contacts;

    var contactModel = Backbone.Model.extend(
        { default:
        {
            id:'',
            Nom:'',
            prenom:''
        }
        }
    );

    var contactCollectionModel = Backbone.Collection.extend (
        {
            model:contactModel
        }
    );





    $(function () {
        var main = function () {

            $("#contact-list").empty();
            //contacts list
            contacts = new contactCollectionModel();

            var contactListView = new mb.views.ContactListView ({el:"#contact-list",collection:contacts});
            console.dir(contactListView);
            contacts.add(
                new contactModel ( {id: 1, prenom: 'Sebastien', Nom: 'ALLIO' })
            );
            contacts.add(
                new contactModel ( {id: 2, prenom: 'Fabien', Nom: 'MANNEVILLE'})
            );
            contacts.add(
                new contactModel ( {id: 3, prenom: 'Matthieu', Nom: 'DEHAUSSY'})
            );




        };



        $("#contact-list").append("<li><h1>En attente</h1></li>");

        setTimeout(main,1000)
        ;

    })
})
    (jQuery,mb);
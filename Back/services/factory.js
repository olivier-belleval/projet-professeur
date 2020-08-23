module.exports = {
  kanbansFormater: (res) => {
    // first step we create an object 'kanbans' that contains object
    let kanbans = {};
    // we take a request result named res

    for(r in res){
      // we format the kanban object
      let kan = {};
      kan.id = res[r].kanban_id;
      kan.title = res[r].kanban_title;
      kan.slug = res[r].kanban_slug;
      kan.description = res[r].kanban_description;
      kan.background = res[r].kanban_background;
      if (typeof kanbans[kan.id] === 'undefined') {
        kanbans[kan.id] = kan;
      };

      // we format the teacher object
      let teacher = {};
      teacher.id = res[r].teacher_id;
      teacher.username = res[r].teacher_username;
      teacher.teacher_first_name = res[r].teacher_first_name;
      teacher.teacher_last_name = res[r].teacher_last_name;

      // if doesnt exist we create the kanban's value 'teacher'
      if (typeof kanbans[kan.id]['teacher'] === 'undefined') {
        kanbans[kan.id]['teacher'] = {};
      };
      // we insert it into the kanban object if it doesnt exist
      if (typeof kanbans[kan.id]['teacher'][teacher.id] === 'undefined') {
        kanbans[kan.id]['teacher'] = teacher;
      };

      // we format the class(renamed student to avoid the reserved name "class") object
      let student = {};
      student.id = res[r].class_id;
      student.username = res[r].class_username;
      student.description = res[r].class_description;

      // if doesnt exist we create the kanban's value 'classes'
      if (typeof kanbans[kan.id]['classes'] === 'undefined') {
        kanbans[kan.id]['classes'] = {};
      };
      // we insert it into the kanban object if it doesnt exist
      if (typeof kanbans[kan.id]['classes'][student.id] === 'undefined') {
        kanbans[kan.id]['classes'][student.id] = student;
      };

      // we format the list object
      let list = {};
      list.id = res[r].list_id;
      list.name = res[r].list_name;
      list.order = res[r].list_order;

        // if doesnt exist we create the kanban's value 'lists'
      if (typeof kanbans[kan.id]['lists'] === 'undefined') {
        kanbans[kan.id]['lists'] = {};
      };

        // we insert it into the kanban object if it doesnt exist
      if (typeof kanbans[kan.id]['lists'][list.id] === 'undefined') {
        kanbans[kan.id]['lists'][list.id] = list;
      };

      // we format the card object
      let card = {};
      card.id = res[r].card_id;
      card.description = res[r].card_description;
      card.order = res[r].card_order;
      card.color = res[r].card_color;

      // if doesnt exist we create the lists's value 'cards'
      if (typeof kanbans[kan.id]['lists'][list.id]['cards'] === 'undefined') {
        kanbans[kan.id]['lists'][list.id]['cards'] = {};
      };

      // we insert it into the lists object if it doesnt exist
      if (typeof kanbans[kan.id]['lists'][list.id]['cards'][card.id] === 'undefined') {
        kanbans[kan.id]['lists'][list.id]['cards'][card.id] = card;
      };

      // we format the tag object
        let tag = {};
        tag.id = res[r].tag_id;
        tag.name = res[r].tag_name;
        tag.color = res[r].tag_color;

        // if doesnt exist we create the card's value 'cards'
        if (typeof kanbans[kan.id]['lists'][list.id]['cards'][card.id]['tags'] === 'undefined') {
          kanbans[kan.id]['lists'][list.id]['cards'][card.id]['tags'] = {};
        };

        // we insert it into the cards object if it doesnt exist
        if (typeof kanbans[kan.id]['lists'][list.id]['cards'][card.id]['tags'][tag.id] === 'undefined') {
          kanbans[kan.id]['lists'][list.id]['cards'][card.id]['tags'][tag.id] = tag;
        };

    };

    // second step we create array in the kanbans obkect
let kanbansArray = Object.values(kanbans);

kanbansArray.forEach(kanban => {
  // for each kanban's object that contains more than one object we replace the object by an array
  
  /**
   * {'1': {}, '2':{}} => [{},{}]
   */
  
    // we filter to avoid null values
    kanban['classes'] = Object.values(kanban['classes']).filter(function (el) {

        return el.id != null;

    });

    // if array is empty then array egal null
    if (kanban['classes'].length === 0) {
        kanban['classes'] = null
    }

  
    // same for the lists's object
    // we filter to avoid null values
    kanban['lists'] = Object.values(kanban['lists']).filter(function (el) {

        return el.id != null;

    });

    // if array is empty then array egal null
    if (kanban['lists'].length === 0) {
        kanban['lists'] = null
    }

    // if lists egal 'null' do nothing
    if (kanban['lists'] !== null) {
        kanban['lists'].forEach( list => {

            // same for the cards's object
            // we filter to avoid null values
            list['cards'] = Object.values(list['cards']).filter(function (el) {

                return el.id != null;

            });

            // if array is empty then array egal null
            if (list['cards'].length === 0) {
                list['cards'] = null
            }

            // if cards egal 'null' do nothing
            if (list['cards'] !== null) {
                list['cards'].forEach( card => {

                    // same for the tags's object
                    // we filter to avoid null values
                    card['tags'] = Object.values(card['tags']).filter(function (el) {

                        return el.id != null;

                    });

                    // if array is empty then array egal null
                    if (card['tags'].length === 0) {
                        card['tags'] = null
                    }
                });
            }
            
        });
    }
});
    return kanbansArray;
  }
}

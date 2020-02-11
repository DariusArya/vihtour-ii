/**
 *
 * @function onReady
 * @param {InterludePlayer} player
 * @param {object} ctx
 */

function onReady(player, ctx) 
{
    ////////// START YOUR CODE HERE \\\\\\\\\\
    player.variables.register('num_clicks', {initialValue: '0'});
    player.variables.register('prop1',{initialValues: ''});
    
    player.on('interactions.report', 
        function(id, data) 
        {
            console.log('interaction occurred!', id, data);
            player.variables.setValue('num_clicks', parseInt(player.variables.getValue('num_clicks')) + 1);
            player.variables.setValue('prop1', player.ui.getProps('button_main_7b1a80'));
           
        });
    // Visit http://developer.eko.com for detailed API documentation
    //////////  END YOUR CODE HERE  \\\\\\\\\\
}

export default { onReady };

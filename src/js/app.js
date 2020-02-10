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

    player.on('interactions.report', 
        function(id, data) 
        {
            console.log('interaction occurred!', id, data);
            player.variables.setValue('num_clicks', parseInt(player.variables.getValue('num_clicks')) + 1);
        });
    // Visit http://developer.eko.com for detailed API documentation
    //////////  END YOUR CODE HERE  \\\\\\\\\\
}

export default { onReady };
